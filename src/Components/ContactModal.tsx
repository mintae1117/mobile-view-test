// src/components/Modal.tsx
import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const ModalContent = styled(motion.div)`
    position: fixed;
    top: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    z-index: 1001;
    width: 90%;
    height: 88%;
    max-width: 336pt;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
`;

const PageCapWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 69px;
    color: white;
    font-size: 25px;
    background-color: rgb(20, 215, 98);
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

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
            <ModalOverlay
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
            ></ModalOverlay>
            <ModalContent
                className="modal-content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{duration: 0.3}}
            >
                <PageCapWrapper>
                    <h3>문의하기</h3>
                    <IoMdClose style={{fontSize:"35px", cursor:"pointer"}} onClick={onClose} />
                </PageCapWrapper>
                {children}
            </ModalContent>
        </>
    );
}

export default ContactModal;