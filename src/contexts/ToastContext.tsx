import ToastManager from 'UIComponents/Toast/ToastManager';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ToastContextType {
    addToast: (type: 'info' | 'error' | 'warning' | 'success', message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<{ id: number; type: 'info' | 'error' | 'warning' | 'success'; message: string }[]>([]);

    const addToast = useCallback((type: 'info' | 'error' | 'warning' | 'success', message: string) => {
        const id = new Date().getTime();
        setToasts((prevToasts) => [...prevToasts, { id, type, message }]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, 3000);
    }, []);

    const removeToast = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastManager toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};
