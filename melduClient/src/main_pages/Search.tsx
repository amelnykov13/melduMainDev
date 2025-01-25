import { useParams } from "react-router-dom"
import SearchBar from "../components/SearchBar";
import { Button } from "@mui/material";
export default function Search() {
    const params = useParams();
    let searchArgs = params.searchArgs;
    
    return (
        <>
            <div>
                <SearchBar text="Search" fullwidth={true} />
                <input type="search"/>
                <div>
                    <Button size="small" variant="outlined">country</Button>
                    <Button size="small" variant="outlined">languages</Button>
                    <Button size="small" variant="outlined">filter</Button>
                    <Button size="small" variant="outlined">all filters</Button>
                </div>
            </div>

            {searchArgs && 
            <div>
                <div>
                    
                    
                </div>
            </div>
            }
            
        </>
    )
}