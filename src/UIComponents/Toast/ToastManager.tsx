// src/components/ToastManager.tsx
import React from 'react';
import Toast from './Toast';

interface ToastData {
    id: number;
    type: 'info' | 'error' | 'warning' | 'success';
    message: string;
}

interface ToastManagerProps {
    toasts: ToastData[];
    removeToast: (id: number) => void;
}

const ToastManager: React.FC<ToastManagerProps> = ({ toasts, removeToast }) => {
    return (
        <div>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    type={toast.type}
                    message={toast.message}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

export default ToastManager;
