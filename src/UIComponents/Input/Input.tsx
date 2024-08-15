import React from 'react';
import styles from './input.module.css'; // Import the CSS module for styling

interface InputProps {
    type?: string;
    value?: any;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    disabled?: boolean;
    defaultValue?: any;
    onBlur?: () => void;
    required?: boolean
}

const Input: React.FC<InputProps> = ({
    type = 'text' || "number",
    value,
    placeholder,
    onChange,
    className,
    style,
    name,
    id,
    disabled,
    defaultValue,
    onBlur,
    required = false
}) => {
    return (
        <input
            type={type}
            required={true}
            placeholder={placeholder}
            onChange={onChange}
            className={`${styles.input} ${className || ''}`}
            style={style}
            name={name}
            id={id}
            value={value}
            disabled={disabled}
            defaultValue={defaultValue}
            onBlur={onBlur}
        />
    );
};

export default Input;
