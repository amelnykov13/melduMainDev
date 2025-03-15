import InfoBlock from "../components/InfoBlock"
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio, Stack, Divider, Typography } from "@mui/material"
import Button from '@mui/material/Button'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import '../styles/pages.css'
import { Link, useNavigate } from "react-router-dom"
import CountrySelect from "../components/CountrySelect";


export default function AdditionalRegisterInfo() {
    let navigate = useNavigate();
    
    const handleLastRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const previousData = JSON.parse(sessionStorage.getItem("registrationData") || {} as string);
        const data = new FormData(event.currentTarget);
        const user = {
            birthdate: data.get('birthdate'),
            country: data.get('country'),
            languages: data.get('languages'),
            initialType: data.get('initialType'),
        }

        const finalData = {...previousData, ...user};
        sessionStorage.setItem("registrationData", JSON.stringify(finalData));
        navigate("/s/home")
    }

    const handleLoginEscape = () => {
        const data = sessionStorage.getItem('registrationData');
        if (data) {
            sessionStorage.removeItem('registrationData');
        } 
        navigate('/login')
    }

    return (
        <>
            <div className="registerFrame">
                <div className="authOperationFrame">
                    <Typography style={{marginLeft: "4vw", fontFamily: 'Inter', fontStyle: 'normal', fontSize: '1.6rem'}}>Additional Information</Typography>

                    <form onSubmit={handleLastRegistration}>

                        <FormControl className="registerInputFields">
                            <Stack direction="column" spacing={6}>
                                <Stack direction="column" spacing={2}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker name="birthdate" sx={{ 
                                            width: '18vw',
                                            backgroundColor: '#FAF9F6',
                                            borderRadius: '20px',
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "20px", // Adjust this value as needed
                                            } 
                                        }}/>
                                    </LocalizationProvider>
                                    
                            
                                    <CountrySelect/>



                                    <TextField required hiddenLabel  size="small" name="languages" type="username" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px", // Adjust this value as needed
                                        }
                                    }}/>

                                    {/* TYPE SWITCH */}

                                    <RadioGroup
                                        row
                                        defaultValue="student"
                                        name="initialType"
                                    >
                                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                                        <FormControlLabel value="tutor" control={<Radio />} label="Tutor" />
                                    </RadioGroup>
                                </Stack>

                                <Stack direction="column"  divider={<Divider orientation="horizontal" flexItem/>} spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>

                                    <Button type="submit" variant="contained" color="success" 
                                    sx={{
                                        width: '18vw',
                                    }}>
                                        Create Account
                                    </Button>


                                    <Button onClick={handleLoginEscape} variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '18vw', border: "1px solid #000"}}>Log in</Button>

                                </Stack>
                                    

                            </Stack>
                        </FormControl>
                    </form>


                    
                </div>

                <InfoBlock color='#1270B0' text="Let's Get Started"/>

            </div>
        
        </>
    )
}