import { Container } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <TaskForm/>
      <TaskList/>
    </Container>
  )
}
