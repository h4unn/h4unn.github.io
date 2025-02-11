import cn from "classnames/bind";
import styles from "./Accordion.module.scss";
import { createContext, useContext, useState } from "react";

import AccordionItem from "./AccordionItem.js";
import AccordionTitle from "./AccordionTitle.js";
import AccordionContent from "./AccordionContent.js";

const cx = cn.bind(styles);

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

export default function Accordion({
  children,
  className = "accordion",
}: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>("experience");

  function toggleItem(id: string | null) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={cx(className)}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
