import React, { useState } from 'react';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // You can also use other adapters like date-fns or moment
import TextField from '@mui/material/TextField';
import '../styles/components.css'
export default function CalendarPad({}) {
    
    let activeAcc1;
    let activeAcc2;
    let activeAcc3;
    const [value, setValue] = useState(null);
    const padStyle = {backgroundColor: '#333'}
    return (
        <div style={padStyle} className='schedulingDockFrame'>
            <p>Hello</p>
            {/* <div>
                //* Calendar widget 
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker
                        orientation="landscape"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div>
                <div>
                    <img src={activeAcc1.profPic}/>
                    <p>{activeAcc1.fullName}</p>
                    <p>{activeAcc1.type}</p>
                    <p>{activeAcc1.time}</p>
                    <p>{activeAcc1.duration}</p>
                </div>
                <div>
                    <img src={activeAcc2.profPic}/>
                    <p>{activeAcc2.fullName}</p>
                    <p>{activeAcc2.type}</p>
                    <p>{activeAcc2.time}</p>
                    <p>{activeAcc2.duration}</p>
                </div>
                <div>
                    <img src={activeAcc3.profPic}/>
                    <p>{activeAcc3.fullName}</p>
                    <p>{activeAcc3.type}</p>
                    <p>{activeAcc3.time}</p>
                    <p>{activeAcc3.duration}</p>
                </div>
            </div>        




            <div>    
                <p>Previous Lessons</p>
                <div>
                    <div>
                        <img src={prevLessAcc1Info.profPic}/>
                        <p>{prevLessAcc1Info.fullName}</p>
                        <p>{prevLessAcc1Info.type}</p>
                        <p>{prevLessAcc1Info.Rating}</p>
                        <p>{prevLessAcc1Info.date}</p>
                    </div>
                    
                    <div>
                    <img src={prevLessAcc2Info.profPic}/>
                        <p>{prevLessAcc2Info.fullName}</p>
                        <p>{prevLessAcc2Info.type}</p>
                        <p>{prevLessAcc2Info.Rating}</p>
                        <p>{prevLessAcc2Info.date}</p>
                    </div>
                </div>
                
                <a>View more</a>

            </div> */}
        </div>
    )
}