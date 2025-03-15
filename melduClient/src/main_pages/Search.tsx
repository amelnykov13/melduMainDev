import { useParams } from "react-router-dom"
import { useState } from "react";
import { Box, Button, Container, FormControl, Stack, TextField, Divider } from "@mui/material";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;


export default function Search() {
    const params = useParams();
    let searchArgs = params.searchArgs;
    
    const [query, setQuery] = useState("");
    
        const handleSearch = async (event: React.FormEvent) => {
            event.preventDefault();
            try {
                //TODO: add acc type fetch to make search either tutor or student type
                const response = await fetch(`${SERVER_URL}/search?query=${query}`);
                const data = await response.json();
                console.log(data);
            } catch(err) {
                console.error(err);
            }
        }

    return (
        <Container>
            <Box display="flex" gap="1vw" flexDirection="row">
                <form onSubmit={handleSearch}>
                    <FormControl className="searchbar">
                            <TextField variant='outlined'
                                type='search'
                                label="Search"
                                size="small"
                                value={query}
                                sx={{ width: '40vw' }}
                                onChange={(e) => setQuery(e.target.value)}/>
                    </FormControl>
                </form>
                <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" className="searchType__btn">country</Button>
                    <Button size="small" variant="outlined" className="searchType__btn">languages</Button>
                    <Button size="small" variant="outlined" className="searchType__btn">filter</Button>
                    <Divider orientation="vertical" flexItem sx={{borderWidth: '0.5px', borderColor: 'black'}}/>
                    <Button size="small" variant="outlined" className="searchType__btn">all filters</Button>
                </Stack>
            </Box>

            {searchArgs && 
            <Stack direction="column">
                
            </Stack>
            }
            
            <div>
                <img/>
                <div>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>

                </div>
            </div>

        </Container>
    )
}