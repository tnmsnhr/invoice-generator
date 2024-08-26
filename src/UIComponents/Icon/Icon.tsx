import { LuCalendarRange } from 'react-icons/lu';
import { IconName } from './iconType';
import sprite from "./sprite.svg"
import { FaChevronDown, FaChevronLeft, FaEye, FaInfoCircle, FaRegCalendarAlt, FaRegFileAlt, FaTachometerAlt, FaTrashAlt, FaUsers } from 'react-icons/fa';


interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    style?: {}
}

const iconMap = {
    [IconName.Document]: FaRegFileAlt,
    [IconName.ChevronDown]: FaChevronDown,
    [IconName.ChevronLeft]: FaChevronLeft,
    [IconName.Trash]: FaTrashAlt,
    [IconName.Dashboard]: FaTachometerAlt,
    [IconName.Customer]: FaUsers,
    [IconName.Calendar]: LuCalendarRange,
    [IconName.Eye]: FaEye,
    [IconName.Info]: FaInfoCircle,
};
const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#292D32", style }) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null
    return (
        <IconComponent size={size} color={color} style={style} />
    );
}

export default Icon