import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const TaskForm = () => {
    return (
        <div>
            <TextField fullWidth  label="title" margin="normal"/>
            <TextField fullWidth label="detail" multiline maxRows="{4}" margin="normal"/>
            <Button variant="contained" sx={{ mt:3 }} endIcon={<SendIcon/>}>
                Add Task 
            </Button>
        </div>
    )
}

export default TaskForm
