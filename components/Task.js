import { ListItem, ListItemText } from "@mui/material"
import moment from "moment"

const Task = ({id, title, detail, timestamp}) => {
    return (
        <ListItem
            sx={{ mt: 3, boxShadow: 3}}
            style={{ backgroundColor: '#FAFAFA'}}
        >
            <ListItemText primary={title} secondary={moment(timestamp).format("dddd, D/M/Y")}/>
        </ListItem>
    )
}

export default Task
