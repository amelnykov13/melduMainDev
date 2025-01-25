import Logo from './Logo'
import CommandButton from './CommandButton'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Badge } from '@mui/material';
import '../styles/components.css'

interface DockPadProps {
    color: string;
}

export default function DockPad({ color }: DockPadProps) {
    let dockStyle = {
        backgroundColor: color
    } 

    return (
        <div className='dockpadFrame' style={dockStyle}>
            <div className='logoHolder'>
                <Logo width='4.5vw' height='8vh'/>
            </div>

            <div className='commandButtonContainer'>
                <CommandButton icon={<HomeIcon style={{fontSize: '4vh'}}/>} />
                
                <CommandButton icon=
                    {
                        <Badge badgeContent={3} color='secondary'>
                            <NotificationsIcon style={{fontSize: '4vh'}}/>
                        </Badge>
                    }
                />
                
                <CommandButton icon=
                    {
                        <Badge badgeContent={2} color='secondary'>
                            <ChatBubbleIcon style={{fontSize: '3.5vh'}}/>
                        </Badge>
                    } 
                />
                
                <CommandButton icon={<SchoolIcon style={{fontSize: '4vh'}}/>} />
                <CommandButton icon={<PersonIcon style={{fontSize: '4vh'}}/>} />
                <CommandButton icon={<SyncAltIcon style={{fontSize: '4vh'}}/>} />       
            </div>

        </div>
    )
}