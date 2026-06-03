"use client";

import { FormEvent, useState } from "react";

const inquiryTypes = ["연구 협력", "산업 파트너십", "대학원·포스트닥", "기술 이전", "미디어 문의", "기타 문의"];

export default function ContactForm() {
  const [type, setType] = useState(inquiryTypes[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      organization: formData.get("organization"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      type,
      message: formData.get("message"),
      website: formData.get("website"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({ message: "" }));

    if (response.ok) {
      setStatus("success");
      setNotice(data.message || "문의가 접수되었습니다.");
      form.reset();
      setType(inquiryTypes[0]);
      return;
    }

    setStatus("error");
    setNotice(data.message || "문의 처리 중 오류가 발생했습니다.");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-xl font-black mb-5" style={{ color: "var(--primary)" }}>문의 유형</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {inquiryTypes.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded border px-4 py-3 text-left text-sm font-bold transition-colors"
              style={{
                borderColor: type === item ? "var(--accent)" : "#d1d5db",
                backgroundColor: type === item ? "var(--accent-pale)" : "white",
                color: "var(--primary)",
              }}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <input className="contact-input" name="name" placeholder="성함 *" required maxLength={80} />
        <input className="contact-input" name="organization" placeholder="기관 / 소속" maxLength={120} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="contact-input" name="email" type="email" placeholder="이메일 *" required maxLength={160} />
        <input className="contact-input" name="phone" placeholder="연락처" maxLength={80} />
      </div>
      <textarea
        className="contact-input min-h-40 resize-none"
        name="message"
        placeholder="문의 내용을 입력해 주세요. *"
        required
        maxLength={2000}
      />

      {notice && (
        <div
          className={`rounded-md border px-4 py-3 text-sm leading-7 ${
            status === "success" ? "border-emerald-100 bg-emerald-50 text-slate-700" : "border-red-100 bg-red-50 text-red-800"
          }`}
        >
          {notice}
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full justify-center" disabled={status === "sending"}>
        {status === "sending" ? "전송 중..." : "문의 접수하기"}
      </button>
      <p className="text-xs leading-6 text-slate-500">
        제출된 문의는 담당자 확인 및 회신 목적에 한해 사용됩니다.
      </p>
    </form>
  );
}
