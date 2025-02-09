import { useAccordionContext } from "./Accordion.js";
import { useAccordionItemContext } from "./AccordionItem.js";

import { ReactNode } from "react";

interface AccordionTitleProps {
  className?: string;
  children: ReactNode;
}

export default function AccordionTitle({
  className,
  children,
}: AccordionTitleProps) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
