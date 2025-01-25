import CalendarPad from "../components/CalendarPad"
import MiniUpperDock from "../components/MiniUpperDock"
import DockPad from "../components/DockPad"
import { Outlet } from "react-router-dom"
import "../styles/components.css"
export default function MainRootLayoutS(){
    
    return (
        <>
            <DockPad color="#6BEBCB"/>
            <MiniUpperDock/>
            <CalendarPad/>
            <div className="mainContent">
                <Outlet/>
            </div>
        </>
    )
}