import InfoBlock from "../components/InfoBlock"
import { TextField, FormControl } from "@mui/material"
import Button from '@mui/material/Button'
import '../styles/pages.css'
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <>
            <div className="registerFrame">
                <div className="registerOperationFrame">
                    <h3 style={{marginLeft: "4vw", fontFamily: 'Inter', fontStyle: 'normal', fontSize: '1.6rem'}}>Create Account</h3>


                    <FormControl className="registerInputFields">

                            <TextField required  size="small" type="username" sx={{
                                    width: '18vw',
                                    backgroundColor: '#FAF9F6',
                                    borderRadius: '20px',
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "20px", // Adjust this value as needed
                                    }
                                }}/>
                            <TextField required hiddenLabel  size="small" type="text" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6',
                                borderRadius: '20px',
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "20px", // Adjust this value as needed
                                }
                            }}/>
                            <TextField required  size="small" type="email" sx={{
                                    width: '18vw',
                                    backgroundColor: '#FAF9F6',
                                    borderRadius: '20px',
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "20px", // Adjust this value as needed
                                    }
                                }}/>
                            <TextField required hiddenLabel  size="small" type="text" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6',
                                borderRadius: '20px',
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "20px", // Adjust this value as needed
                                }
                            }}/>
                            <TextField required  size="small" type="password" sx={{
                                    width: '18vw',
                                    backgroundColor: '#FAF9F6',
                                    borderRadius: '20px',
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "20px", // Adjust this value as needed
                                }
                                }}/>
                            <TextField required hiddenLabel  size="small" type="password" sx={{
                                width: '18vw',
                                backgroundColor: '#FAF9F6',
                                borderRadius: '20px',
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "20px", // Adjust this value as needed
                                }
                            }}/>

                            <div className="operationButtons">
                                <Button type="submit" variant="contained" color="success" 
                                sx={{
                                    width: '18vw',
                                }}>Create Account</Button>
                                
                                <Link to="/login">
                                    <Button variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '18vw'}}>Log in</Button>
                                </Link>
                            
                            </div>
                    </FormControl>


                    
                </div>

                <InfoBlock color='#1270B0' text="Let's Get Started"/>

            </div>
        
        </>
    )
}