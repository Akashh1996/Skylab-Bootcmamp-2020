import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calendarDiv.css';

function CalendarDiv({title}) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div class="calendar-wrapper">
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
    )

}

export default CalendarDiv;