import { useState } from 'react';
import "./calendar.css"
import { Calendar as RCalendar } from 'react-calendar';
import Button from 'UIComponents/Button';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
    onChangeDate: (data: string) => void
}

const Calendar: React.FC<CalendarProps> = ({ onChangeDate }) => {
    const [value, onChange] = useState<Value>(new Date());

    const executeCallBack = () => {
        const newData = new Date(value?.toString() as string)
        const epoch = Math.floor(newData.getTime() / 1000)
        onChangeDate(epoch?.toString())
    }
    return (
        <div className="calendar">
            <RCalendar onChange={onChange} value={value} />
            <Button variant="outline" style={{ margin: "2rem 0", width: "100%" }} onClick={executeCallBack}>Apply</Button>
        </div>
    );
}

export default Calendar