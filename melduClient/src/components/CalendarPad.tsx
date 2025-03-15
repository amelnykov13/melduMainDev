import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // You can also use other adapters like date-fns or moment
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers';
import '../styles/components.css'
import { Dayjs } from 'dayjs';


const darkThemeCalendar = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        text: {
            primary: "#ffffff"
        }
    },
    typography: {
        allVariants: {
            color: '#ffffff', // Ensure all text defaults to white
        },
    },
});

export default function CalendarPad({}) {
    
    let activeAcc1;
    let activeAcc2;
    let activeAcc3;
    const [value, setValue] = useState<Dayjs | null>(null);
    const padStyle = {backgroundColor: '#333'}
    
    return (
        <div style={padStyle} className='schedulingDockpad'>

             <div>
                <ThemeProvider theme={darkThemeCalendar}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={value}
                            onChange={(newValue) => setValue(newValue)} // Updates value correctly
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select Date"
                                />
                            )}
                        />
                    </LocalizationProvider>
                </ThemeProvider>
            </div>
{/*
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