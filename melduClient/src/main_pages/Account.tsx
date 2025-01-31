import { useParams } from 'react-router-dom'
import '../styles/pages.css'
export default function Account() {
    const params = useParams();
    const username = params.username;        
    return (
        <>
            <div className='mainAccountFrame'>
                <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
                    <img/>
                    <p>hi</p>
                    <p>{}</p>
                    <p>{}</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
                </div>
            </div>

            <div>
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
                <div>
                    <p>{}</p>
                    <p>{}</p>
                </div>
            </div>

            <div>
                <h3>ABOUT</h3>
                <p>{}</p>
            </div>
            
        </>
    )
}