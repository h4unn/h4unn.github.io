import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

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

  return (
    open &&
    createPortal(
      <dialog className="Modal" onClose={onClose}>
        <div className="ModalContent">{open ? children : null}</div>
      </dialog>,
      document.querySelector(".modal") as Element
    )
  );
}
