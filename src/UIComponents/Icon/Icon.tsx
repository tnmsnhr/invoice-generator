import { IconName } from './iconType';
import sprite from "./sprite.svg"

interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#292D32" }) => {
    return (
        <svg
            width={size}
            height={size}
            fill={color}
        >
            <use href={`${sprite}#${name}`} height="100%" width="100%" />
        </svg>
    );
}

export default Icon