import '../assets/styles/Popup.css';
const Popup = ({isOpen, onClose, children}) => {

  if (!isOpen) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        {children}
      </div>
    </div>
  );
}

export default Popup;
