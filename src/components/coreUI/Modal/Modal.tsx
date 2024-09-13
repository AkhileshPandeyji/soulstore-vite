import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";


interface ModalProps extends PropsWithChildren {
  show: boolean;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {

  const { show, children } = props;

  return show ? createPortal(children, document.body) : null;

}

export default Modal;