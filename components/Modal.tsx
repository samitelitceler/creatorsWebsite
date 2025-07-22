import React, { memo } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = memo(({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10 p-4">
      <div className="bg-[#F2944D] rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-black transition-colors z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;