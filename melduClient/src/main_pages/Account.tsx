import { useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material';
import '../styles/pages.css'
export default function Account() {
    const params = useParams();
    const username = params.username;        
    return (
        <Stack direction="column" spacing={5} alignItems="center">
            <Box className='accountInfo' sx={{ width: '65vw'}}>
                <div>
                    <img/>
                    <Stack direction="row" spacing={20} sx={{alignItems: 'center'}}>
                        <Stack direction="column" spacing={1}>
                            <p>Fullname</p>
                            <p>UserName</p>
                        </Stack>
                        
                        <p>Current time</p>
                    </Stack>
                </div>

                <Stack direction="column" spacing={1} style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <p>Location</p>
                    <p>Languages</p>
                    <p>Connections Num</p>
                </Stack>
            </Box>

            <Stack direction="row" spacing={10} className='additionalAccountInfo' sx={{ width: '65vw', alignItems: "center", py: '3vh', justifyContent: 'center'}}>
                <p>Lessons held</p>
                <p>Lessons made</p>
                <p>Account types</p>
                <Stack direction="column" spacing={2} alignItems="center">
                    <p>Student rating</p>
                    <p>Tutor rating</p>
                </Stack>
            </Stack>

            <Stack className='additionalAccountInfo' sx={{ width: '65vw', alignItems: "start", py: '1vh',}}>
                <Typography sx={{mx: '2vw'}}>ABOUT</Typography>
                <p>{}</p>
            </Stack>
            
        </Stack>
    )
}