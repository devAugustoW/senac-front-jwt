import './Modal.css';

const Modal = ({ message, onClose, onConfirm, isSuccess }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        {isSuccess ? (
          <button onClick={onConfirm}>OK</button>
        ) : (
          <button onClick={onClose}>Tente Novamente</button>
        )}
      </div>
    </div>
  );
};

export default Modal;