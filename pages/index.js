import { Alert, Avatar, Box, Container, IconButton, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Loading from "../components/Loading";
import Login from "../components/Login";
import { TaskContext } from "./TaskContext";
import { useAuth } from "../auth";
import { auth } from "../firebase";

export default function Home() {
  const {currentUser} = useAuth()
  const [task, setTask] = useState({ title: '', detail: ''})
  const [open, setOpen] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  

  const showAlert = (type, msg) => {
    setAlertType(type)
    setAlertMessage(msg)
    setOpen(true)
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }
  // return <Login/>
  // return <Loading type="spin" color="blue" />
  return (
    <TaskContext.Provider value={{ showAlert, task, setTask }}>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}} mt={3}>
          <IconButton onClick={() => auth.signOut()}>
            <Avatar src={currentUser.photoURL}/>
          </IconButton>
          <Typography variant="h5" mt={1}>
            {currentUser.displayName}
          </Typography>
        </Box>
        <TaskForm/>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}>
            <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%'}}>
              {alertMessage}
            </Alert>
          </Snackbar>
        <TaskList/>
      </Container>
    </TaskContext.Provider>
  )
}
