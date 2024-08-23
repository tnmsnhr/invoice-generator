import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import * as  styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> & {
    Header: React.FC<{ children: ReactNode }>;
    Body: React.FC<{ children: ReactNode }>;
    Footer: React.FC<{ children: ReactNode }>;
} = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContentContainer}>
                <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                    <div>
                        <button className={styles.modalCloseButton} onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};


const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles.modalHeader}>{children}</div>;
}

const Body: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles.modalBody}>{children}</div>;
};

const Footer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles.modalFooter}>{children}</div>;
};

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export default Modal;