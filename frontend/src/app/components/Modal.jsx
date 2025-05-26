import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray rounded-xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            <div className="text-gray-100">
              {children}
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
