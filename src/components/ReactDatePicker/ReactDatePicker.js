import React, { useState } from 'react';
import Docs from '../Docs/Docs.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.scss';

const Links = [ {link: 'https://www.npmjs.com/package/react-datepicker', text:'for date picker'} ];
const Commands = ['npm install react-datepicker --save'];
const Tutorials = ['https://www.youtube.com/watch?v=tojwQEdI-QI'];

const ReactDatePicker = () => {

    const [ selectedDate, setSelectedDate ] = useState(null);

    return ( 
        <div className="centered">
            <DatePicker
                className="myDatePicker"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                // maxDate={}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                isClearable={true}
                showYearDropdown={true}
                scrollableYearDropdown={true}

            />

            <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
        </div>
     );
}
 
export default ReactDatePicker;