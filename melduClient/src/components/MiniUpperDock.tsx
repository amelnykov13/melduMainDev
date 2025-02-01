import SearchBar from "./SearchBar"
import '../styles/components.css'
import { Typography } from "@mui/material"
export default function MiniUpperDock() {
    return (
        <div className="miniUpperDockFrame">
            <div className="upperDockButtons">
                <a>
                    <Typography>
                        Settings
                    </Typography>
                </a>
                <a>
                    <Typography>
                        Help
                    </Typography>
                </a>
            </div>

            <div className="searchBarUpperDock">
                <SearchBar text="Search"/>
            </div>

        </div>
    )
}