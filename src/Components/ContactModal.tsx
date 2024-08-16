// src/components/Modal.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './ContactModal.css'; // 스타일을 별도의 CSS 파일로 관리

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const modalVariants: Variants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100vh' },
};

const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // 모달이 열려 있지 않을 때는 아무것도 렌더링하지 않음

    return (
        <>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
            ></motion.div>
            <motion.div
                className="modal-content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{duration: 0.3}}
            >
                <button onClick={onClose}>Close Modal</button>
                {children}
            </motion.div>
        </>
    );
}

export default ContactModal;