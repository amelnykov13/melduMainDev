import { Box } from '@mui/material'
import '../styles/components.css'
//TODO: Add the argument handle
export default function Lessons({}) {
    return (
        <>
            <Box className='lesson'>
                <Box style={{display: 'flex', flexDirection: 'row', gap: '1vw', alignItems: 'center'}}>
                    <Box>
                        <img className='lesson__img'/>
                    </Box>
                    
                    <Box style={{ display: 'flex', gap: '45vw', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box>
                            <p>Fullname</p>
                            <p>Topic</p>
                        </Box>
                        <p>time</p>
                    </Box>
                </Box>
            </Box>
        </>
    )
}