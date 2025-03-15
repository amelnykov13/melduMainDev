import CalendarPad from "../components/CalendarPad"
import MiniUpperDock from "../components/MiniUpperDock"
import DockPad from "../components/DockPad"
import { Outlet, useLocation } from "react-router-dom"
import "../styles/components.css"
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid2';

export default function MainRootLayoutT(){
    const location = useLocation();
    const path = location.pathname;

    // ! Temporal mode fetching
    let newpath = path;
    if (path.startsWith('/t/')) {
        newpath = path.slice(3)
    } 


    return (
        <Container maxWidth={false} disableGutters sx={{ width: "100%", height: "100%", padding: 0, justifyContent: "space-between" }}>
            <MiniUpperDock />
            <Grid container spacing={0} sx={{ flexGrow: 1}}>
                <Grid size={0.5} sx={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    height: "100vh",
                    zIndex: 999,
                }}>
                    <DockPad mode="t" disabledBtn={newpath} color="#0E587F"/>
                </Grid>
                
                <Grid size={9} sx={{
                    zIndex: 1,
                    marginLeft: "8%",
                    marginRight: "21%",
                    pt: "5vh",
                }}>
                
                    <Outlet/>
                
                </Grid>

                <Grid size={2.5} sx={{
                    position: "fixed",
                    right: 0,
                    top: 0,
                    height: "100vh",
                    zIndex: 999,
                }}>
                    <CalendarPad/>
                </Grid>
            </Grid>
        </Container>
    )
}