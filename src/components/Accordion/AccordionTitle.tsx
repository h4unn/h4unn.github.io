import cn from "classnames/bind";
import styles from "./Accordion.module.scss";
import { useAccordionContext } from "./Accordion.js";
import { useAccordionItemContext } from "./AccordionItem.js";

import { ReactNode } from "react";

const cx = cn.bind(styles);

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
    <h3 className={cx(className)} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
