import InfoBlock from "../components/InfoBlock"
import { Button, FormControl, Stack, Divider } from "@mui/material"
import { TextField, Typography } from "@mui/material"
import '../styles/pages.css'
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div>
            <div className="loginFrame">
                <div>
                    <InfoBlock color='#6BEBCB' text='Welcome Back'/>    
                </div>

                <div className="authOperationFrame">
                        <Typography style={{marginLeft: "4vw", fontFamily: 'Inter', fontStyle: 'normal', fontSize: '1.6rem'}}>Log in</Typography>


                        <FormControl className="registerInputFields">
                            <Stack direction="column" spacing={6}>
                                <Stack direction="column" spacing={2}>
                                    <TextField required hiddenLabel label="Username" size="small" name="username" type="username" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px", // Adjust this value as needed
                                        }
                                    }}/>
                                    
                                    <TextField required hiddenLabel label="Password" size="small" name="password" type="password" sx={{
                                        width: '18vw',
                                        backgroundColor: '#FAF9F6',
                                        borderRadius: '20px',
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px", // Adjust this value as needed
                                        }
                                    }}/>
                                </Stack>

                                <Stack direction="column"  divider={<Divider orientation="horizontal" flexItem/>} spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Button type="submit" variant="contained" color="success" 
                                    sx={{
                                        width: '18vw',
                                    }}>Log in</Button>
                                    
                                    <Link to="/register">
                                        <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '18vw', border: "1px solid #000"}}>Create Account</Button>
                                    </Link>
                                </Stack>
                                    

                            </Stack>
                        </FormControl>


                    
                </div>

            </div>
        </div>
    )
}