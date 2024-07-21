const Popup = ({isOpen, onClose, children}) => {

  if (!isOpen) return null;

  return (
    <div className="popup-container">
      <div className="popup-body">
        {children}
      </div>
    </div>
  );
}

export default Popup;
