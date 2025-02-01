import InfoBlock from "../components/InfoBlock"
import { TextField, FormControl, Typography, Stack, Divider } from "@mui/material"
import Button from '@mui/material/Button'
import '../styles/pages.css'
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <>
            <div className="registerFrame">
                <div className="authOperationFrame">
                    <Typography style={{marginLeft: "4vw", fontFamily: 'Inter', fontStyle: 'normal', fontSize: '1.6rem'}}>Create Account</Typography>


                    <FormControl className="registerInputFields">
                        <Stack direction="column" spacing={6}>
                            <Stack direction="column" spacing={2}>
                                <TextField required label="Fullname"  size="small" name="fullname" type="text" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px", // Adjust this value as needed
                                        }
                                    }}/>
                                <TextField required hiddenLabel label="Username" size="small" name="username" type="username" sx={{
                                    width: '18vw',
                                    backgroundColor: '#FAF9F6',
                                    borderRadius: '20px',
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "20px", // Adjust this value as needed
                                    }
                                }}/>
                                <TextField required  size="small" label="Email" name="email" type="email" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px", // Adjust this value as needed
                                        }
                                    }}/>
                                <TextField required hiddenLabel  size="small" label="Password" name="password" type="password" sx={{
                                    width: '18vw',
                                    backgroundColor: '#FAF9F6',
                                    borderRadius: '20px',
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "20px", // Adjust this value as needed
                                    }
                                }}/>
                                <TextField required  size="small" name="repeatPassword" label="Repeat Password" type="password" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "20px", // Adjust this value as needed
                                    }
                                    }}/>
                            </Stack>

                            <Stack direction="column"  divider={<Divider orientation="horizontal" flexItem/>} spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Link to="addinfo">
                                    <Button type="submit" variant="contained" color="success" 
                                    sx={{
                                        width: '18vw',
                                    }}>
                                        Continue
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '18vw', border: "1px solid #000"}}>Log in</Button>
                                </Link>
                            </Stack>
                                

                        </Stack>
                    </FormControl>


                    
                </div>

                <InfoBlock color='#1270B0' text="Let's Get Started"/>

            </div>
        
        </>
    )
}