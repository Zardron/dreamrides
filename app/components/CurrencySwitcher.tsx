"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type CurrencyCode = "AED" | "AUD" | "USD" | "RUB" | "EUR" | "GBP" | "KWD" | "SAR";

type CurrencyOption = {
  code: CurrencyCode;
  flag: string;
  label: string;
  rate: number;
};

const currencies: CurrencyOption[] = [
  { code: "AED", flag: "ae", label: "United Arab Emirates dirham", rate: 1 },
  { code: "AUD", flag: "au", label: "Australian dollar", rate: 0.41 },
  { code: "USD", flag: "us", label: "United States dollar", rate: 0.27 },
  { code: "RUB", flag: "ru", label: "Russian ruble", rate: 21.6 },
  { code: "EUR", flag: "eu", label: "Euro", rate: 0.23 },
  { code: "GBP", flag: "gb", label: "British pound", rate: 0.2 },
  { code: "KWD", flag: "kw", label: "Kuwaiti dinar", rate: 0.083 },
  { code: "SAR", flag: "sa", label: "Saudi riyal", rate: 1.02 },
];

function Flag({ code }: { code: CurrencyOption["flag"] }) {
  if (code === "sa") {
    return (
      <span aria-hidden="true" className="flag">
        <svg viewBox="0 0 58 40" className="h-full w-full" focusable="false">
          <rect width="58" height="40" fill="#006c35" />
          <path
            d="M13 14h32M16 18h26M20 22h18M17 26h25"
            stroke="#fff"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 31h27c4.5 0 7-1.6 8.5-4.1" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M41 31l7.8-4.4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  return <span aria-hidden="true" className={`flag flag-${code}`} />;
}

function formatPrice(aed: number, currency: CurrencyOption) {
  const value = aed * currency.rate;
  const maximumFractionDigits = currency.code === "KWD" ? 3 : 0;

  return `${currency.code} ${new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value)}`;
}

export default function CurrencySwitcher() {
  const [selectedCode, setSelectedCode] = useState<CurrencyCode>("AED");
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const selectedCurrency = useMemo(
    () => currencies.find((currency) => currency.code === selectedCode) ?? currencies[0],
    [selectedCode],
  );

  useEffect(() => {
    const savedCurrency = window.localStorage.getItem("dreamrides-currency") as CurrencyCode | null;
    if (savedCurrency && currencies.some((currency) => currency.code === savedCurrency)) {
      const frame = window.requestAnimationFrame(() => setSelectedCode(savedCurrency));
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dreamrides-currency", selectedCurrency.code);

    function updateVisibleCurrency() {
      document.querySelectorAll<HTMLElement>("[data-currency-price]").forEach((element) => {
        const aed = Number(element.dataset.aed);
        if (!Number.isNaN(aed)) {
          element.textContent = formatPrice(aed, selectedCurrency);
        }
      });
    }

    updateVisibleCurrency();
  }, [selectedCurrency, pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!panelRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/78 transition hover:border-[#d7b46a] hover:text-white"
        aria-expanded={isOpen}
      >
        <Flag code={selectedCurrency.flag} />
        <span>{selectedCurrency.code}</span>
        <span className={`h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-current transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.7rem)] z-50 w-52 rounded-lg border border-white/10 bg-[#181818] p-2 shadow-[0_22px_80px_rgba(0,0,0,0.55)]">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              type="button"
              onClick={() => {
                setSelectedCode(currency.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-lg font-semibold tracking-[0.06em] transition ${
                selectedCurrency.code === currency.code
                  ? "bg-[#d7b46a] text-black"
                  : "text-white/72 hover:bg-white/[0.08] hover:text-white"
              }`}
              aria-label={currency.label}
            >
              <Flag code={currency.flag} />
              <span>{currency.code}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
