import { useParams } from "react-router-dom"
import DockPad from "../components/DockPad";
export default function Chat() {
    let param = useParams();
    let { type } = param;
    let backColor = type === 's' ? "#6BEBCB" : "#0E587F";
    
    
    
    return (
        <>
            <DockPad color={backColor}/>

            <div>
                <input type="search"/>
                <div>
                </div>
            </div>

            <div>
                {/* Calendar */}
            </div>

            <div>
                {/* <div>
                    <img src={activeAcc1.profPic}/>
                    <p>{activeAcc1.fullName}</p>
                    <p>{activeAcc1.type}</p>
                    <p>{activeAcc1.time}</p>
                    <p>{activeAcc1.duration}</p>
                </div>
                <div>
                    <img src={activeAcc2.profPic}/>
                    <p>{activeAcc2.fullName}</p>
                    <p>{activeAcc2.type}</p>
                    <p>{activeAcc2.time}</p>
                    <p>{activeAcc2.duration}</p>
                </div> */}
            </div>

            <div>
                
            </div>
        
        </>
    )
}