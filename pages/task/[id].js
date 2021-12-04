import { collection, doc, getDoc, getDocs } from "@firebase/firestore"
import { Grid } from "@mui/material"
import { db } from "../../firebase"

const Detail = ({ taskProps }) => {
    const task = JSON.parse(taskProps)
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                { task.title }: { task.detail }
        </Grid>
    )
}

export default Detail

export const getStaticPaths = async () => {
    const snapshot = await getDocs(collection(db, 'tasks'))
    const paths = snapshot.docs.map(doc => {
        return {
            params: { id: doc.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const docRef = doc(db, "tasks", id)
    const docSnap = await getDoc(docRef)

    return {
        props: { taskProps: JSON.stringify(docSnap.data()) || null}
    }
}