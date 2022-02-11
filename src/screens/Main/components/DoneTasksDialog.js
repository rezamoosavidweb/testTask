import { Dialog, Grid, Typography, Zoom } from "@mui/material";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import useStyles from "../style";
import TaskCard from "./TaskCard";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});
export default function DoneTasksDialog({ open, onClose }) {
    const classes = useStyles();
    const tasks = useSelector((state) => state?.main?.tasks);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: classes.dialogPaper }}
            maxWidth="xl"
            TransitionComponent={Transition}
        >
            <Grid container direction="column" wrap="nowrap" className={classes.doneTasksContainer}>
                <Grid container justifyContent="center" className={classes.doneTasksTitle}>
                    <Typography variant="h3">Done Tasks</Typography>
                </Grid>
                {tasks?.map((task) => {
                    return (
                        task.status==="done"&& <TaskCard
                            key={task.id}
                            task={task}
                        />
                    );
                })}
            </Grid>
        </Dialog>
    );
}
