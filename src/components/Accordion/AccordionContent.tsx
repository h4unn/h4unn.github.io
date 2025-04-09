import { motion } from "framer-motion";
import cn from "classnames/bind";
import styles from "./Accordion.module.scss";
import { useAccordionContext } from "./Accordion.js";
import { useAccordionItemContext } from "./AccordionItem.js";

import { ReactNode } from "react";

const cx = cn.bind(styles);

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
    <>
      {isOpen ? (
        <motion.div
          className={cx("accordion-content", className)}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <span>{children}</span>
        </motion.div>
      ) : null}
    </>
  );
}

{
  /* <motion.div
      className={cx(className, isOpen ? `open` : `close`)}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div> */
}
