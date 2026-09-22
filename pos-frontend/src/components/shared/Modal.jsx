import React from "react";
import "./Modal.css";

const Modal = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="Modal-page"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="Modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="title">
          <h2 className="title-h2">{title}</h2>
          <button
            className="modal-btn"
            onClick={onClose}
            type="button"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
