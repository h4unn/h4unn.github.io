import cn from "classnames/bind";
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

  return (
    open &&
    createPortal(
      <dialog className={cx("Modal")} ref={dialog} onClose={onClose}>
        <div className={cx("ModalContainer")}>{open ? children : null}</div>
      </dialog>,
      document.querySelector("#modal") as Element
    )
  );
}
