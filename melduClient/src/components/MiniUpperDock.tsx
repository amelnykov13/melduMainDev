import SearchBar from "./SearchBar"
import '../styles/components.css'
export default function MiniUpperDock() {
    return (
        <div className="miniUpperDockFrame">
            <div className="upperDockButtons">
                <a>Settings</a>
                <a>Help</a>
            </div>

            <div className="searchBarUpperDock">
                <SearchBar text="Search"/>
            </div>

        </div>
    )
}