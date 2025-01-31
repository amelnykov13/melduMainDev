import { Button } from "@mui/material"
import '../styles/pages.css'
import { useState } from "react"
export default function Notifications() {
    const [catBtn, setCatBtn] = useState('');
    return (
        <>
            <div className="notifCategoriesHolder">
                <Button size="small" variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '5vw', borderRadius: '15px', border: '1px solid #000'}}>Cat1</Button>
                <Button size="small" variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '5vw', borderRadius: '15px', border: '1px solid #000'}}>Cat2</Button>
                <Button size="small" variant="outlined" style={{backgroundColor: '#fff', color: 'black', width: '5vw', borderRadius: '15px', border: '1px solid #000'}}>Cat3</Button>
            </div>

            <div className="notificationsHolder">

            </div>
        </>
    )
}