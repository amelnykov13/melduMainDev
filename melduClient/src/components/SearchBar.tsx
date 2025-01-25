import TextField from '@mui/material/TextField';


interface SearchBarProps { 
    text: string;
    fullwidth?: boolean;
}
export default function SearchBar({text = "Search", ...props}: SearchBarProps){
    return (
        <div>
            <TextField variant='outlined'
                type='search'
                label={text}
                size="small"
                {...props}/>
        </div>
    )
}