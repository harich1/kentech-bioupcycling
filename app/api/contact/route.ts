import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_FIELD_LENGTH = 2000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimit = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function withinRateLimit(key: string) {
  const now = Date.now();
  const entry = rateLimit.get(key);

  if (!entry || entry.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

function clean(value: unknown) {
  return String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (!withinRateLimit(ip)) {
      return NextResponse.json({ message: "잠시 후 다시 시도해 주세요." }, { status: 429 });
    }

    const body = await request.json();
    const name = clean(body.name);
    const organization = clean(body.organization);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const type = clean(body.type);
    const message = clean(body.message);
    const website = clean(body.website);

    if (website) {
      return NextResponse.json({ message: "문의가 접수되었습니다." });
    }

    if (!name || !email || !type || !message) {
      return NextResponse.json({ message: "필수 항목을 입력해 주세요." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "이메일 형식을 확인해 주세요." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "bioupcycling@kentech.ac.kr";
    const from = process.env.CONTACT_FROM_EMAIL || "KENTECH Bio-Upcycling <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { message: "문의 수신 설정이 아직 완료되지 않았습니다. 이메일로 직접 문의해 주세요." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[KENTECH 바이오업사이클링 센터] ${type} 문의 - ${name}`,
      text: [
        `문의 유형: ${type}`,
        `성함: ${name}`,
        `기관/소속: ${organization || "-"}`,
        `이메일: ${email}`,
        `연락처: ${phone || "-"}`,
        "",
        "문의 내용:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "문의가 접수되었습니다." });
  } catch {
    return NextResponse.json({ message: "문의 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
