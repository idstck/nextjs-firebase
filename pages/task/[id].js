import { collection, doc, getDoc, getDocs } from "@firebase/firestore"
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { db } from "../../firebase"
import Link from "next/link"

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
                <Grid item xs={3}>
                    <Card
                        sx={{ minWidth: 275, maxWidth: 500, boxShadow: 3 }}
                        style={{ backgroundColor: '#fafafa' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {task.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} colo="text.secondary">
                                    {task.detail}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href="/">
                                    <Button size="small">Back</Button>
                                </Link>
                            </CardActions>
                    </Card>
                </Grid>
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