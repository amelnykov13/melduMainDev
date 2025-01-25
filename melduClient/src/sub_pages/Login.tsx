import InfoBlock from "../components/InfoBlock"
import { Button } from "@mui/material"
import { TextField } from "@mui/material"
import '../styles/pages.css'

export default function Login() {
    return (
        <div>
            <div className="loginFrame">
                <div>
                    <InfoBlock color='#6BEBCB' text='Welcome Back'/>    
                </div>

                <div className="loginOperationFrame">
                    <h2>Login</h2>
                    
                    <div className="loginInputFields">

                        <TextField required label="Username" size="small" type="username" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6'
                        }}/>

                        <TextField required hiddenLabel label="Password" size="small" type="password" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6'
                        }}/>

                        <a style={{color: "black"}}>Forgot password?</a>
                    </div>

                    <div className="operationButtons">
                        <Button variant="contained" type="submit" color="success">Log in</Button>
                        <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black'}}>Create Account</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}