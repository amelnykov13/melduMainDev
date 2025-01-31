import InfoBlock from "../components/InfoBlock"
import { Button, FormControl } from "@mui/material"
import { TextField } from "@mui/material"
import '../styles/pages.css'
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div>
            <div className="loginFrame">
                <div>
                    <InfoBlock color='#6BEBCB' text='Welcome Back'/>    
                </div>

                <div className="loginOperationFrame">
                    <p style={{marginLeft: "4vw", fontFamily: 'Inter', fontStyle: 'normal', fontSize: '1.6rem'}}>Login</p>
                    
                    <FormControl className="loginInputFields">
                   
                        <TextField required label="Username" size="small" type="username" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6',
                            borderRadius: '20px',
                            "& .MuiOutlinedInput-root": {
                               borderRadius: "20px", // Adjust this value as needed
                            }
                        }}/>

                        <TextField required hiddenLabel label="Password" size="small" type="password" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6',
                            borderRadius: '20px',
                            "& .MuiOutlinedInput-root": {
                               borderRadius: "20px", // Adjust this value as needed
                            }
                        }}/>
                   
                        <a style={{color: "black", marginLeft: '11.5vw' }}>Forgot password?</a>
                   
                    </FormControl>


                    <div className="operationButtons">
                        <Button variant="contained" type="submit" color="success" sx={{
                            width: '18vw'
                        }}>Log in</Button>

                        <Link to="/register">
                            <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '18vw'}}>Create Account</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}