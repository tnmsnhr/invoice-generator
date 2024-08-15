
import React from 'react';
import styles from "./toast.module.css"

interface ToastProps {
    type: 'info' | 'error' | 'warning' | 'success';
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'info':
                return '#007bff';
            case 'error':
                return '#dc3545';
            case 'warning':
                return '#ffc107';
            case 'success':
                return '#28a745';
            default:
                return '#007bff';
        }
    };

    return (
        <div
            className={styles.toast}
            style={{
                backgroundColor: getBackgroundColor()
            }}>
            <div>{message}</div>
            <button
                onClick={onClose}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginLeft: '20px'
                }}
            >
                &times;
            </button>
        </div>
    );
};

export default Toast;
