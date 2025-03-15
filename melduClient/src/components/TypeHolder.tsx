import '../styles/components.css'
import { Link } from 'react-router-dom';
import profimg from '../assets/profholder.jpg' 

interface TypeHolderProps {
    img?: string;
    link: string;
    type: "Student" | "Tutor";
    selected: boolean;
}

export default function TypeHolder({img, link, type, selected}: TypeHolderProps){
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            <div className={selected ? "type--activated" : 'type'}>
                <Link to={link}>
                    <img src={profimg}/>    
                </Link>
            </div>
            <p style={{color: 'white', fontSize: '1.5rem'}}>{type}</p>
        </div>
    )
}