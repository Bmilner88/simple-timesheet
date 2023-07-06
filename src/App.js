import React, { useState } from "react";
import Calendar from "react-calendar";


import "react-calendar/dist/Calendar.css";
import "./App.css";

export default function App() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  return (
    <div className="App">
      <Calendar
        onChange={onDateChange}
        value={date}
        showNeighboringMonth={false}
        locale={"en-US"}
        selectRange={true}
      />
    </div>
  );
}
