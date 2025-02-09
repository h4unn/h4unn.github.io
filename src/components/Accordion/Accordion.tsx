import { createContext, useContext, useState } from "react";

import AccordionItem from "./AccordionItem.js";
import AccordionTitle from "./AccordionTitle.js";
import AccordionContent from "./AccordionContent.js";

interface AccordionContextType {
  openItemId: string | null;
  toggleItem: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType>({
  openItemId: null,
  toggleItem: () => {},
});

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

import { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export default function Accordion({ children, className }: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  function toggleItem(id: string | null) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
