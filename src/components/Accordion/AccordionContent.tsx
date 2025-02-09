import { useAccordionContext } from "./Accordion.js";
import { useAccordionItemContext } from "./AccordionItem.js";

import { ReactNode } from "react";

interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export default function AccordionContent({
  className,
  children,
}: AccordionContentProps) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
