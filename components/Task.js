import { deleteDoc, doc } from "@firebase/firestore";
import { IconButton, ListItem, ListItemText } from "@mui/material"
import moment from "moment"
import { useContext } from "react";
import { db } from "../firebase";
import { TaskContext } from "../pages/TaskContext";
import DeleteIcon from '@mui/icons-material/Delete'
import MorevertIcon from '@mui/icons-material/Morevert'
import { useRouter } from "next/router";

const Task = ({id, title, detail, timestamp}) => {
    const router = useRouter()
    const { showAlert, setTask } = useContext(TaskContext)
    const deleteTask = async(id, e) => {
        e.stopPropagation();
        const docRef = doc(db, "tasks", id)
        await deleteDoc(docRef)
        showAlert('error', `Task with id ${id} deleted successfully`)
    }
    const showDetail = (id, e) => {
        e.stopPropagation()
        router.push(`/task/${id}`)
    }
    return (
        <ListItem
            onClick={() => setTask({ id, title, detail, timestamp })}
            sx={{ mt: 3, boxShadow: 3}}
            style={{ backgroundColor: '#FAFAFA'}}
            secondaryAction={
                <>
                    <IconButton onClick={e => deleteTask(id, e)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MorevertIcon onClick={ e => showDetail(id, e) }/>
                    </IconButton>
                </>
            }
        >
            <ListItemText primary={title} secondary={moment(timestamp).format("dddd, D/M/Y")}/>
        </ListItem>
    )
}

export default Task
