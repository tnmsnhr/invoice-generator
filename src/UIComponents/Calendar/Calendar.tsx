import { useEffect, useState } from "react";
import "./calendar.css"
import CalendarComponent from "./Partial/Calendar";
import Button from "UIComponents/Button";

interface ICalendarProps {
    onChangeDate: (epoch: string) => void;
}

const CustomCalendar: React.FC<ICalendarProps> = ({ onChangeDate }) => {
    const [date, setDate] = useState<Date>(new Date())

    const selectDateHandler = () => {
        const newData = new Date(date?.toString() as string)
        const epoch = Math.floor(newData.getTime() / 1000)

        onChangeDate(epoch?.toString())
    }

    return (
        <div id="calendar">
            <CalendarComponent
                setDate={setDate}
                date={date}
                selectRange={false}
            />
            <Button variant="outline"
                onClick={selectDateHandler}
                style={{
                    margin: "1.5rem"
                }}
            >Select Date</Button>
        </div>
    );
};

export default CustomCalendar;
