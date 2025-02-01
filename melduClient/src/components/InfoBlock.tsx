
import Logo from "./Logo"
import '../styles/components.css'
import { Typography } from "@mui/material";

interface InfoBlockProps {
    color: string;
    text: string;
}

export default function InfoBlock({color, text}: InfoBlockProps) {

    return (
        <div className="infoBlockFrame" style={{backgroundColor: color}}>
            <div className="infoBlockInfoFrame">
                <Logo width="7vw" height="13vh"/>
                <Typography style={{color: 'black'}}>{text}</Typography>
            </div>
        </div>
    )
}