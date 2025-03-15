import { Container, Stack } from '@mui/material'
import '../styles/pages.css'

export default function HomePage(){
    
    return (
        <div>
            <p className='recommendation__label'>Interests</p>    
            <Container className="recommendation" sx={{width: "65vw", height: "35vh"}}>
                <Stack direction="row" spacing={5}>
                    
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>

                </Stack>
            </Container>

            <p className='recommendation__label'>Familiar</p>
            <Container className='recommendation' sx={{width: "65vw", height: "35vh", p: 3}}>
                <Stack direction="row" spacing={5}>
                
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
                
                </Stack>
            </Container>

            <p className='recommendation__label'>Institutions</p>
            <Container className='recommendation' sx={{width: "65vw", height: "35vh"}}>
                <Stack direction="row" spacing={5}>
            
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
            
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
            
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
            
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
            
                    <div className='recommendation__elm'>
                        <img className='recommendation__elm__img'/>
                        <p>fullname</p>
                        <p>country, city</p>
                        <p>offer</p>
                    </div>
            
                </Stack>
            </Container>
        
        </div>
    )
}