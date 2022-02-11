import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { approveTask } from "../actions";
import useStyles from "../style";

export default function TaskCard({ task, openEditModal, selectTask, openInfoModal }) {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleApproveTask = (e) => {
        e.stopPropagation();
        dispatch(approveTask({ id: task.id, status: "done" }));
    };
    const handleEditTask = (e) => {
        e.stopPropagation();
        openEditModal();
        selectTask(task);
    };
    return (
        <Grid
            container
            className={classes.taskCardContainer}
            style={{ cursor: task.status === "done" ? "default" : "pointer" }}
            onClick={openInfoModal}
        >
            <Grid container justifyContent="space-between" className={classes.row}>
                <Typography variant="h5">{task.taskTitle}</Typography>
                <Grid item className={classes.flex}>
                    <Typography variant="h5">{task?.level?.toUpperCase()}</Typography>
                    <div
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: "100%",
                            marginLeft: 10,
                            backgroundColor:
                                task.level === "low"
                                    ? theme.palette.secondary.main
                                    : task.level === "medium"
                                    ? theme.palette.primary.main
                                    : theme.palette.error.main,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Grid container item xs={12} md={7} className={classes.leftGrid}>
                    <Typography variant="h6">{task.taskDescription}</Typography>
                </Grid>
                <Grid container justifyContent="flex-end" item xs={12} md={5} className={classes.rightGrid}>
                    {task.status === "undone" && (
                        <>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn1}
                                onClick={handleApproveTask}
                            >
                                Done Task
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.btn2}
                                onClick={handleEditTask}
                            >
                                Edit Task
                            </Button>
                        </>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}
