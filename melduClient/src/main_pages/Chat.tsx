import { FormControl, Input, InputAdornment, IconButton } from "@mui/material";
import { useParams } from "react-router-dom"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Chat() {
    let param = useParams();
    
    
    
    return (
        <>

            <div className="chat">
                <div className="chat__content">

                </div>
                <FormControl className="chat__input">
                    <Input sx={{ width: '40vw', borderRadius: '15px', border: '1px solid #000'}} disableUnderline
                    startAdornment= {
                        <InputAdornment position="start">
                            <IconButton>
                                <CalendarMonthIcon/>
                            </IconButton>
                        </InputAdornment>
                    } endAdornment= {
                        <InputAdornment position="end">
                            <IconButton>
                                <AttachFileIcon/>
                            </IconButton>
                            <IconButton>
                                <ImageIcon/>
                            </IconButton>
                        </InputAdornment>
                    }>
                    
                    </Input>
                </FormControl>
            </div>
        
        </>
    )
}