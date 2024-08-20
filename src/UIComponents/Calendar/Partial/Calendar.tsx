import { motion } from "framer-motion";
import Calendar from "react-calendar";
// import "src/App.css";

interface CalendarProps {
    setDate: any;
    date: any;
    selectRange: boolean;
}
const CalendarComponent = (props: CalendarProps) => {
    const { setDate, date, selectRange } = props;
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="calendar-container"
        >
            <Calendar onChange={setDate} value={date} selectRange={selectRange} />
        </motion.div>
    );
};

export default CalendarComponent;
