import InfoBlock from "../components/InfoBlock"
import { TextField } from "@mui/material"
import Button from '@mui/material/Button'
import '../styles/pages.css'
export default function Register() {
    return (
        <>
            <div className="registerFrame">
                <div className="registerOperationFrame">
                    <h3>Create Account</h3>
                    <div className="registerInputFields">
                        <TextField required  size="small" type="username" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6'
                            }}/>
                        <TextField required hiddenLabel  size="small" type="password" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6'
                        }}/>
                        <TextField required  size="small" type="username" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6'
                            }}/>
                        <TextField required hiddenLabel  size="small" type="password" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6'
                        }}/>
                        <TextField required  size="small" type="username" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6'
                            }}/>
                        <TextField required hiddenLabel  size="small" type="password" sx={{
                            width: '18vw',
                            backgroundColor: '#FAF9F6'
                        }}/>
                    </div>

                    <div className="operationButtons">
                        <Button variant="contained" color="success">Create Accoung</Button>
                        <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black'}}>Log in</Button>
                    </div>


                    
                </div>

                <InfoBlock color='#1270B0' text="Let's Get Started"/>

            </div>
        
        </>
    )
}