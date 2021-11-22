import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import Task from "./Task"

const TaskList = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, "tasks")
        const q = query(collectionRef, orderBy("timestamp", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setTask(
                querySnapshot.docs.map(doc => (
                    {
                        ...doc.data(),
                        id: doc.id,
                        timestamp: doc.data().timestamp?.toDate().getTime()
                    }
                ))
            )
        })
        return unsubscribe
    }, [])
    return (
        <div>
            {
                task.map((task) => 
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        detail={task.detail}
                        timestamp={task.timestamp}/>
                )
            }
        </div>
    )
}

export default TaskList
