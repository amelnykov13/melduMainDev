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
import { Link } from 'react-router-dom';

interface DockPadProps {
    color: string;
    disabledBtn?: any;
    mode: 's' | 't';
}

export default function DockPad({ color, disabledBtn, mode }: DockPadProps) {
    let dockStyle = {
        backgroundColor: color
    } 

    return (
        <div className='dockpad' style={dockStyle}>
            <div className='logo'>
                <Logo width='4.5vw' height='8vh'/>
            </div>

            <div className='commandButtons'>
                <Link to={mode === 's' ? '/s/home' : '/t/home'}>
                    <CommandButton disabled={disabledBtn === "home"} icon={<HomeIcon style={{fontSize: '4vh'}}/>} />
                </Link>
                
                <Link to={mode === 's' ? '/s/notifications' : '/t/notifications'}>
                    <CommandButton disabled={disabledBtn === 'notifications'} icon=
                        {
                            <Badge badgeContent={3} color='secondary'>
                                <NotificationsIcon style={{fontSize: '4vh'}}/>
                            </Badge>
                        }
                    />
                </Link>
                
                <Link to={mode === 's' ? '/s/chat' : '/t/chat'}>
                    <CommandButton disabled={disabledBtn === 'chat'} icon=
                        {
                            <Badge badgeContent={2} color='secondary'>
                                <ChatBubbleIcon style={{fontSize: '3.5vh'}}/>
                            </Badge>
                        } 
                    />
                </Link>
                
                <Link to={mode === 's' ? '/s/education' : '/t/education'}>
                    <CommandButton disabled={disabledBtn === 'education'} icon={<SchoolIcon style={{fontSize: '4vh'}}/>} />
                </Link>

                <Link to={mode === 's' ? '/s/account' : '/t/account'}>
                    <CommandButton disabled={disabledBtn === 'myprofile'} icon={<PersonIcon style={{fontSize: '4vh'}}/>} />
                </Link>
                <Link to="/">
                    <CommandButton disabled={disabledBtn === 'switch'} icon={<SyncAltIcon style={{fontSize: '4vh'}}/>} />       
                </Link>
            </div>

        </div>
    )
}