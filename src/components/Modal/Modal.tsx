import cn from "classnames/bind";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion 추가
import styles from "./Modal.module.scss";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const cx = cn.bind(styles);

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ open, children, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [open]);

  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (dialog.current && event.target === dialog.current) {
        onClose();
      }
    };

    const currentDialog = dialog.current;
    currentDialog?.addEventListener("click", handleBackdropClick);

    return () => {
      currentDialog?.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.dialog
          className={cx("Modal")}
          ref={dialog}
          onClose={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={cx("ModalContainer")}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>,
    document.querySelector("#modal") as Element
  );
}
