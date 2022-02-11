/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Fab, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskCard from "./components/TaskCard";
import useStyles from "./style";
import AddIcon from "@mui/icons-material/Add";
import CreateDialog from "./components/CreateDialog";
import DoneTasksDialog from "./components/DoneTasksDialog";
import TaskInformationDialog from "./components/TaskInformationDialog";

export default function Main() {
    const classes = useStyles();
    const [selectedTask, setSelectedTask] = useState({});
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [doneTasksOpen, setDoneTasksOpen] = useState(false);
    const [taskInfoOpen, setTaskInfoOpen] = useState(false);
    const tasks = useSelector((state) => state?.main?.tasks);

    //open create task dialog
    const handleOpenCreateDialog = () => {
        setCreateDialogOpen(true);
    };
    //close create task dialog
    const handleCloseCreateDialog = () => {
        setCreateDialogOpen(false);
        setSelectedTask({});
    };

    //open done tasks dialog
    const handleOpenDoneTasksDialog = () => {
        setDoneTasksOpen(true);
    };
    //close done tasks dialog
    const handleCloseDoneTasksDialog = () => {
        setDoneTasksOpen(false);
    };

    //open tasks information dialog
    const handleOpenTasksInfoDialog = (task) => {
        setTaskInfoOpen(true);
        setSelectedTask(task);
    };
    //close tasks information dialog
    const handleCloseTasksInfoDialog = () => {
        setTaskInfoOpen(false);
        setSelectedTask({});
    };
    //update selected task
    useEffect(() => {
        if (selectedTask.id) setSelectedTask(tasks.find((task) => task.id === selectedTask.id));
    }, [tasks]);
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root}>
            {tasks?.length ? (
                <Grid container direction="column" justifyContent="space-between" className={classes.tasksContainer}>
                    <Button variant="contained" className={classes.btn3} onClick={handleOpenDoneTasksDialog}>
                        View Done Tasks
                    </Button>
                    <Grid container className={classes.taskBox}>
                        {tasks.map((task) => {
                            return (
                                task.status === "undone" && (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        openEditModal={handleOpenCreateDialog}
                                        selectTask={setSelectedTask}
                                        openInfoModal={() => handleOpenTasksInfoDialog(task)}
                                    />
                                )
                            );
                        })}
                    </Grid>
                    <Grid container justifyContent="flex-end" alignItems="center" className={classes.fabContainer}>
                        <Fab aria-label="add" classes={{ root: classes.fabRoot }} onClick={handleOpenCreateDialog}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            ) : (
                <Button onClick={handleOpenCreateDialog} variant="contained" color="primary">
                    Create Your First Task ;)
                </Button>
            )}
            <CreateDialog open={createDialogOpen} onClose={handleCloseCreateDialog} selectedTask={selectedTask} />
            <DoneTasksDialog open={doneTasksOpen} onClose={handleCloseDoneTasksDialog} />
            <TaskInformationDialog open={taskInfoOpen} onClose={handleCloseTasksInfoDialog} task={selectedTask} />
        </Grid>
    );
}
