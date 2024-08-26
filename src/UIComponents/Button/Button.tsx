import React from 'react';
import * as  styles from './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline' | 'default' | "error" | "default-outline" | "ghost" | "primary-success";
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined,
    name?: string,
    value?: string
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'default',
    className,
    style,
    disabled = false,
    type,
    name,
    value,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            style={style}
            name={name}
            value={value}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
