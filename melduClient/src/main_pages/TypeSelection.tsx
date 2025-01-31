import { useRef } from "react"
import { Link } from "react-router-dom"
import { IconButton } from "@mui/material"
import { ExitToApp, Rotate90DegreesCcw } from "@mui/icons-material"
import '../styles/pages.css'
import TypeHolder from "../components/TypeHolder"
export default function TypeSelection() {

    return (
        <div className="typeSelectionBack">
            <div className="selectionButtons">
                <div>
                    <TypeHolder link="/s" type="Student"/>
                </div>

                <div>
                    <TypeHolder link="/t" type="Tutor"/>
                </div>
            </div>

            <Link to="/login">
                <div className="typeSelectionExtButton">
                    <IconButton sx={{
                    backgroundColor: "grey",
                    borderRadius: "25%",
                    rotate: '180deg',
                    width: '2.5vw',
                    height: '5vh'
                }}>
                        <ExitToApp/>
                    </IconButton>
                </div>
            </Link>
        </div>
    )
}