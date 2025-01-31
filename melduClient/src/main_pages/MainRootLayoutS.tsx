import CalendarPad from "../components/CalendarPad"
import MiniUpperDock from "../components/MiniUpperDock"
import DockPad from "../components/DockPad"
import { Outlet, useLocation } from "react-router-dom"
import "../styles/components.css"

export default function MainRootLayoutS(){
    const location = useLocation();
    const path = location.pathname;

    let newpath = path;
    if (path.startsWith('/s/')) {
        newpath = path.slice(3)
    } 


    return (
        <>
            <DockPad mode="s" disabledBtn={newpath} color="#6BEBCB"/>
            <MiniUpperDock/>
            <CalendarPad/>
            <div className="mainContent">
                <Outlet/>
            </div>
        </>
    )
}