import { Button, Dialog, Grid, Typography, Zoom } from "@mui/material";
import { forwardRef } from "react";
import useStyles from "../style";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});
export default function DoneTasksDialog({ open, onClose ,handleDeleteTask}) {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: classes.dialogPaper }}
            maxWidth="xl"
            TransitionComponent={Transition}
        >
            <Grid container direction="column" wrap="nowrap" className={classes.deleteTasksContainer}>
                <Grid container justifyContent="center" className={classes.doneTasksTitle}>
                    <Typography variant="h4">Are you sure delete this task?</Typography>
                </Grid>
                <Grid container>
                    <Button color="error" onClick={onClose}>No</Button>
                    <Button color="secondary" onClick={handleDeleteTask}>Yes</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
}
