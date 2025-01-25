
import Logo from "./Logo"
import '../styles/components.css'

interface InfoBlockProps {
    color: string;
    text: string;
}

export default function InfoBlock({color, text}: InfoBlockProps) {

    return (
        <div className="infoBlockFrame" style={{backgroundColor: color}}>
            <div className="infoBlockInfoFrame">
                <Logo width="7vw" height="13vh"/>
                <p style={{color: 'black'}}>{text}</p>
            </div>
        </div>
    )
}