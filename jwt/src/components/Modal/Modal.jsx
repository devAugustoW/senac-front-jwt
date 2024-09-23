import './Modal.css';

const Modal = ({ message, onClose, onSuccess }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <p>{message}</p>
        {onSuccess ? (
          <button onClick={onSuccess}>Ir para Login</button>
        ) : (
          <button onClick={onClose}>Tente novamente</button>
        )}
      </div>
    </div>
  );
};

export default Modal;