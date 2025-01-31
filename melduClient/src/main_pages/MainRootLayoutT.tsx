import CalendarPad from "../components/CalendarPad"
import MiniUpperDock from "../components/MiniUpperDock"
import DockPad from "../components/DockPad"
import { Outlet, useLocation } from "react-router-dom"
import '../styles/components.css'
export default function MainRootLayoutT(){
    const location = useLocation();
    const path = location.pathname;

    let newpath = path;
    if (path.startsWith('/t/')) {
        newpath = path.slice(3)
    } 


    return (
        <>
            <DockPad mode="t" disabledBtn={newpath} color="#0E587F"/>
            <MiniUpperDock/>
            <CalendarPad/>
            <div className="mainContent">
                <Outlet/>
            </div>
            
        </>
    )
}