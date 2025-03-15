import '../styles/pages.css'
import Lessons from '../components/Lessons'
import { Stack, Container } from '@mui/material'
export default function Education() {
    return (
        <>
            <Container className='lessons' sx={{ borderRadius: '10px', width: '65vw'}}>
                <Stack direction="column" spacing={5}>
                    <Lessons/>
                    <Lessons/>
                </Stack>
            </Container> 
        </>
    )
}   