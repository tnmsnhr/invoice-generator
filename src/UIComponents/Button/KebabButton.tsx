import styles from "./kebab.module.css"

interface KebabButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}

const KebabButton: React.FC<KebabButtonProps> = ({ style, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.kebab} ${className || ''}`}
            style={style}
        >
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
        </button>
    )
}

export default KebabButton