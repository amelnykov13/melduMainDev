import { IconButton } from "@mui/material"
import '../styles/components.css'

interface CommandButtonProps { 
    icon: React.ReactNode,
    disabled?: boolean;
}

export default function CommandButton({icon, disabled = false}: CommandButtonProps){
    return (
        <IconButton disabled={disabled} sx={{
            backgroundColor: "white",
            borderRadius: "25%",
            "&:hover": {
                backgroundColor: disabled ? "white" : "#008c9e", // Hover effect
            },
            "&:disabled": {
                backgroundColor: "lightgray", // Disabled state
                color: "gray",
            },

        }} className="cmdButtonFrame">
            {icon}
        </IconButton>
    )
}