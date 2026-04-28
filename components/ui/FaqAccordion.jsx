"use client";

import { Minus, Plus } from "lucide-react";
import useDisclosure from "@/hooks/useDisclosure";
import { cn } from "@/utils/cn";

export default function FaqAccordion({ items }) {
  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function FaqItem({ item, defaultOpen }) {
  const { isOpen, toggle } = useDisclosure(defaultOpen);

  return (
    <article className={cn("faq-item", isOpen && "faq-item-open")}>
      <button
        type="button"
        className="faq-trigger"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
      >
        <div className="faq-trigger-content">
          <span className={cn("faq-index", isOpen && "faq-index-open")}>
            {item.index}
          </span>
          <div>
            <h3 className="faq-question">{item.question}</h3>
            {isOpen ? (
              <p id={`faq-${item.id}`} className="faq-answer">
                {item.answer}
              </p>
            ) : null}
          </div>
        </div>
        <span className="faq-icon">
          {isOpen ? <Minus className="faq-icon-svg" /> : <Plus className="faq-icon-svg" />}
        </span>
      </button>
    </article>
  );
}