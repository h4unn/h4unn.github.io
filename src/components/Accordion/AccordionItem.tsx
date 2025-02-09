import { createContext, useContext } from "react";

const AccordionItemContext = createContext<string | undefined>(undefined);

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;
}

interface AccordionItemProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function AccordionItem({
  id,
  className,
  children,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
