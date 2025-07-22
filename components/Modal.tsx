import React, { memo } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = memo(({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
      <div className="bg-[#F2944D] rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;