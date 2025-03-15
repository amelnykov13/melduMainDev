import { useState } from "react"
import '../styles/components.css'
import { Box, FormControl, TextField, Typography, Container, Button } from "@mui/material"
export default function MiniUpperDock() {
    const [query, setQuery] = useState("");

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${SERVER_URL}/s/search?query=${query}`);
            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <Container maxWidth="lg" sx={{position: 'fixed', top: 0, display: 'flex', flexDirection: 'row',
            bgcolor: "white",
            zIndex: 998,
            padding: '1vh',
            paddingLeft: '2vw',
            marginLeft: "4%",
            borderBottom: '1px solid black',
            justifyContent: 'space-between',
            alignContent: 'center'
        }}>
            <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
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
            </Box>
        
            <Box>
                <form onSubmit={handleSearch}>
                    <FormControl>
                            <TextField variant='outlined'
                                type='search'
                                label="Search"
                                size="small"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                sx={{ width: '15vw'}}/>
                    </FormControl>
                </form>
            </Box>

        </Container>

    )
}