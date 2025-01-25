import { useParams } from 'react-router-dom'
export default function Account() {
    const params = useParams();
    const username = params.username;        
    return (
        <>
            <div>
                <img/>
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
                <div>
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