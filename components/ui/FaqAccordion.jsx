"use client";

import { Minus, Plus } from "lucide-react";
import useDisclosure from "@/hooks/useDisclosure";
import { cn } from "@/utils/cn";

export default function FaqAccordion({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function FaqItem({ item, defaultOpen }) {
  const { isOpen, toggle } = useDisclosure(defaultOpen);

  return (
    <article
      className={cn(
        "border-b border-accent/70 px-6 py-7 transition duration-300 sm:px-10",
        isOpen && "rounded-xl border-none bg-faq"
      )}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
      >
        <div className="flex items-start gap-5 sm:gap-8">
          <span className={cn("text-[2rem] font-medium", isOpen ? "text-accent" : "text-smoke")}>
            {item.index}
          </span>
          <div>
            <h3 className="text-[1.35rem] font-medium leading-tight text-ink sm:text-[1.6rem]">
              {item.question}
            </h3>
            {isOpen ? (
              <p id={`faq-${item.id}`} className="mt-3 text-lg leading-8 text-mutedDark">
                {item.answer}
              </p>
            ) : null}
          </div>
        </div>
        <span className="rounded-full border border-accent p-2 text-accent">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
    </article>
  );
}
