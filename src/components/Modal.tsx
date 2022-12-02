import Button from "./Button";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
interface ModalProps {
  isOpen: boolean;
  buttonStyle: string;
  onCloseModal: () => void;
}

const Modal = ({ buttonStyle, onCloseModal, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        onClick={onCloseModal}
        className="modal-bg"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal"
        >
          <div className="flex flex-col justify-around items-center h-full">
            <div className="w-full">
              <GrClose
                onClick={onCloseModal}
                className="ml-auto opacity-50 text-2xl fron-bold cursor-pointer"
              />
            </div>
            <h1 className="error">Error</h1>
            <p className="description opacity-75">
              Please add not less than 2 and not more than 5 files.
            </p>
            <Button
              title={"OK"}
              style={buttonStyle}
              handleClick={onCloseModal}
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
