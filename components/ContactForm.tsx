"use client";
import { useState, type FormEvent } from "react";
import type { Lang } from "@/lib/content";
export default function ContactForm({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const [state, setState] = useState("idle");
  const [notice, setNotice] = useState("");
  const labels = en
    ? ["Name", "Organisation", "Email", "Phone", "Message"]
    : ["성함", "기관 / 소속", "이메일", "연락처", "문의 내용"];
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setNotice("");
    const form = event.currentTarget;
    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setState("success");
      setNotice(en ? "Your enquiry has been sent." : "문의가 접수되었습니다.");
      form.reset();
    } catch {
      setState("error");
      setNotice(
        en
          ? "Your enquiry could not be sent. Please try again later or contact us by email."
          : "문의를 전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 문의해 주세요.",
      );
    }
  }
  return (
    <form onSubmit={submit} className="inquiry-form">
      <h2>{en ? "Send an enquiry" : "문의 보내기"}</h2>
      <input
        className="honeypot"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {["name", "organization", "email", "phone"].map((name, i) => (
        <label key={name}>
          {labels[i]}
          {(i === 0 || i === 2) && " *"}
          <input
            className="contact-input"
            name={name}
            type={i === 2 ? "email" : i === 3 ? "tel" : "text"}
            required={i === 0 || i === 2}
            maxLength={160}
          />
        </label>
      ))}
      <label>
        {en ? "Enquiry type" : "문의 유형"}
        <select name="type" className="contact-input">
          {(en
            ? [
                "Research collaboration",
                "Field demonstration",
                "Technology applications",
                "Other",
              ]
            : ["연구 협력", "현장 실증", "기술 적용", "기타 문의"]
          ).map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label>
        {labels[4]} *
        <textarea
          name="message"
          className="contact-input"
          required
          rows={6}
          maxLength={2000}
        />
      </label>
      <p className="small-note">
        {en
          ? "The information you submit is used to review and respond to your enquiry."
          : "제출한 정보는 문의 확인과 회신을 위해 사용됩니다."}
      </p>
      {notice && (
        <p role="status" className="form-notice">
          {notice}
        </p>
      )}
      <button className="button" disabled={state === "sending"} type="submit">
        {state === "sending"
          ? en
            ? "Sending…"
            : "전송 중…"
          : en
            ? "Send enquiry"
            : "문의 보내기"}
      </button>
    </form>
  );
}
