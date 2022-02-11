import { Button, Dialog, Grid, Typography, Zoom } from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "../style";
import CreateDialog from "./CreateDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { removeTask,approveTask } from "../actions";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});
export default function DoneTasksDialog({ open, onClose, task }) {
    const classes = useStyles();
    const theme = useTheme();
    const [deleteTaskOpen, setDeleteTaskOpen] = useState(false);
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const dispatch = useDispatch();

    //open create task dialog
    const handleOpenCreateDialog = () => {
        setCreateDialogOpen(true);
    };
    //close create task dialog
    const handleCloseCreateDialog = () => {
        setCreateDialogOpen(false);
    };
    //open tasks information dialog
    const handleOpenDeleteTasksDialog = () => {
        setDeleteTaskOpen(true);
    };
    //close tasks information dialog
    const handleCloseDeleteTasksDialog = () => {
        setDeleteTaskOpen(false);
    };
    //handle delete tasks
    const handleDeleteTask = () => {
        console.log("delete");
        dispatch(removeTask(task.id));
        handleCloseDeleteTasksDialog();
        onClose();
    };
    //done task
    const handleApproveTask = () => {
        dispatch(approveTask({ id: task.id, status: "done" }));
        onClose();
    };
    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: classes.dialogPaper }}
            maxWidth="xl"
            TransitionComponent={Transition}
        >
            <Grid container direction="column" wrap="nowrap" className={classes.tasksInformationContainer}>
                <div
                    className={classes.taskInformationLevel}
                    style={{
                        backgroundColor:
                            task.level === "low"
                                ? theme.palette.secondary.main
                                : task.level === "medium"
                                ? theme.palette.primary.main
                                : theme.palette.error.main,
                    }}
                />
                <Grid container justifyContent="center" className={classes.infoTitle}>
                    <Typography variant="h4">{task.taskTitle}</Typography>
                </Grid>
                <Grid container justifyContent="center" className={classes.infoDesc}>
                    <Typography variant="h5">{task.taskDescription}</Typography>
                </Grid>
                <Grid container justifyContent="space-between" className={classes.infoBtnContainer}>
                    <Button variant="contained" color="primary" onClick={handleOpenCreateDialog}>
                        Edit Task
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleApproveTask}>
                        Done Task
                    </Button>
                    <Button variant="contained" color="error" onClick={handleOpenDeleteTasksDialog}>
                        Delete Task
                    </Button>
                </Grid>
            </Grid>
            <DeleteTaskDialog
                open={deleteTaskOpen}
                onClose={handleCloseDeleteTasksDialog}
                task={task}
                handleDeleteTask={handleDeleteTask}
            />
            <CreateDialog open={createDialogOpen} onClose={handleCloseCreateDialog} selectedTask={task} />
        </Dialog>
    );
}
