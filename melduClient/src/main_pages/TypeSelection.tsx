import { useRef } from "react"
import { Link } from "react-router-dom"
import { IconButton } from "@mui/material"
import { ExitToApp, Rotate90DegreesCcw } from "@mui/icons-material"
import '../styles/pages.css'
import TypeHolder from "../components/TypeHolder"
export default function TypeSelection() {

    return (
        <div className="typeSelection">
            <div className="typeSelection__btn">
                <div>
                    <TypeHolder link="/s" type="Student" selected={true}/>
                </div>

                <div>
                    <TypeHolder link="/t" type="Tutor" selected={false}/>
                </div>
            </div>

            <Link to="/login">
                <div className="typeSelection__btn--exit">
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