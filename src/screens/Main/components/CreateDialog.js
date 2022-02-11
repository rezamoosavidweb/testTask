/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Dialog, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Zoom } from "@mui/material";
import useStyles from "../style";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../actions";
import { forwardRef, useEffect } from "react";
import { useTheme } from "@mui/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
});

export default function CreateDialog({ open, onClose, selectedTask }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();

    const schema = yup.object().shape({
        taskTitle: yup.string().required("You must enter a title."),
        taskDescription: yup.string().required("You must enter a description."),
    });
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: useMemo(() => {
            return selectedTask;
        }, [selectedTask]),
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        if (selectedTask?.id) {
            dispatch(editTask({ id: selectedTask?.id, task: data, status: selectedTask?.status }));
        } else {
            dispatch(addTask({ id: Date.parse(new Date()), ...data, status: "undone" }));
        }
        onClose();
    };
    useEffect(() => {
        if (selectedTask.id) {
            reset(selectedTask);
        } else {
            reset({ taskTitle: "", taskDescription: "", taskGifts: "", level: "low" });
        }
    }, [selectedTask]);
    return (
        <Dialog
            open={open}
            onClose={() => {
                onClose();
                reset({level: "low"});
            }}
            classes={{ paper: classes.dialogPaper }}
            maxWidth="xl"
            TransitionComponent={Transition}
        >
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <TextField
                    name="taskTitle"
                    label="Task Title"
                    {...register("taskTitle", { required: true })}
                    variant="outlined"
                />
                <span className={classes.minHeight15}>{errors?.taskTitle?.message}</span>
                <TextField
                    name="taskDescription"
                    label="Task Description"
                    multiline
                    rows={3}
                    {...register("taskDescription", { required: true })}
                    variant="outlined"
                />
                <span className={classes.minHeight15}>{errors?.taskDescription?.message}</span>
                <TextField label="Gifts and KPI for this task ;)" {...register("taskGifts")} />
                <FormControl component="fieldset" className={classes.formControlRoot}>
                    <RadioGroup
                        row
                        aria-label="gender"
                        value={getValues("level")}
                        onChange={(e) => reset({ level: e.target.value })}
                        name="level"
                        className={classes.radioGroupRoot}
                    >
                        <FormControlLabel
                            value="low"
                            control={
                                <Radio
                                    sx={{
                                        "&.Mui-checked": {
                                            color: theme.palette.secondary.main,
                                        },
                                    }}
                                    {...register("level")}
                                />
                            }
                            label="Low"
                        />
                        <FormControlLabel
                            value="medium"
                            control={
                                <Radio
                                    sx={{
                                        "&.Mui-checked": {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                    {...register("level")}
                                />
                            }
                            label="Medium"
                        />
                        <FormControlLabel
                            value="high"
                            control={
                                <Radio
                                    sx={{
                                        "&.Mui-checked": {
                                            color: theme.palette.error.main,
                                        },
                                    }}
                                    {...register("level")}
                                />
                            }
                            label="High"
                        />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" type="submit" color="primary" className={classes.addTaskBtn}>
                    {selectedTask.id ? "Update Task" : "Add To Tasks"}
                </Button>
            </form>
        </Dialog>
    );
}
