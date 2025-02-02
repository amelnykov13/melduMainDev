import { useParams } from "react-router-dom"
import { useState } from "react";
import { Box, Button, Container, FormControl, Stack, TextField } from "@mui/material";
export default function Search() {
    const params = useParams();
    let searchArgs = params.searchArgs;
    
    const [query, setQuery] = useState("");
    
        const handleSearch = async (event: React.FormEvent) => {
            event.preventDefault();
            try {
                const response = await fetch(`http://localhost:5050/api/search?query=${query}`);
                const data = await response.json();
                console.log(data);
            } catch(err) {
                console.error(err);
            }
        }

    return (
        <Container>
            <Box display="flex" gap="2vw" flexDirection="row">
                <form onSubmit={handleSearch}>
                    <FormControl className="seachBarUpperDock">
                        {/* <div className="searchBarUpperDock"> */}
                            <TextField variant='outlined'
                                type='search'
                                label="Search"
                                size="small"
                                value={query}
                                sx={{ width: '40vw'}}
                                onChange={(e) => setQuery(e.target.value)}/>
                        {/* </div> */}
                    </FormControl>
                </form>
                <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined">country</Button>
                    <Button size="small" variant="outlined">languages</Button>
                    <Button size="small" variant="outlined">filter</Button>
                    <Button size="small" variant="outlined">all filters</Button>
                </Stack>
            </Box>

            {searchArgs && 
            <div>
                <div>
                    
                    
                </div>
            </div>
            }
            
        </Container>
    )
}