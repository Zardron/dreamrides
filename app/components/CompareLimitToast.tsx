"use client";

import { useEffect, useRef, useState } from "react";

const MAX_COMPARE_CARS = 3;

export default function CompareLimitToast() {
  const [message, setMessage] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function showToast(nextMessage: string) {
      setMessage(nextMessage);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setMessage("");
        timeoutRef.current = null;
      }, 3600);
    }

    function selectedCompareInputs() {
      return Array.from(document.querySelectorAll<HTMLInputElement>('input[name="compare"]:checked'));
    }

    function handleChange(event: Event) {
      const target = event.target;

      if (!(target instanceof HTMLInputElement) || target.name !== "compare" || target.type !== "checkbox") {
        return;
      }

      if (target.checked && selectedCompareInputs().length > MAX_COMPARE_CARS) {
        target.checked = false;
        showToast("You can compare a maximum of 3 cars only.");
      }
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;

      if (!(form instanceof HTMLFormElement) || form.id !== "fleet-compare") {
        return;
      }

      if (selectedCompareInputs().length > MAX_COMPARE_CARS) {
        event.preventDefault();
        showToast("Please keep your comparison to 3 cars maximum.");
      }
    }

    document.addEventListener("change", handleChange);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("change", handleChange);
      document.removeEventListener("submit", handleSubmit);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`fixed left-1/2 top-24 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-[#d7b46a]/45 bg-[#111111]/96 px-5 py-4 text-sm font-medium text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 ${
        message ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d7b46a] text-xs font-bold text-black">
          3
        </span>
        <div>
          <p className="font-semibold text-white">Compare limit reached</p>
          <p className="mt-1 text-white/68">{message}</p>
        </div>
      </div>
    </div>
  );
}
