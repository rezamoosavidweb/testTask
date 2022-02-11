import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
    },
    dialogPaper: {
        backgroundColor: "#fff",
        borderRadius: "25px !important",
        padding: 25,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: 470,
        maxWidth: "100% ",
        alignItems: "center",
    },
    addTaskBtn: {
        width: 200,
        marginTop: "15px !important",
    },
    formControlRoot: {
        width: "100%",
        display: "flex !important",
        justifyContent: "center",
    },
    radioGroupRoot: {
        "@media(max-width:500px)": {
            width: "100%",
            flexDirection: "column !important",
        },
    },
    minHeight15: {
        minHeight: 15,
        fontSize: 11,
        width: "100%",
        marginBottom: 5,
        color: theme.palette.error.main,
    },
    tasksContainer: {
        padding: "20px",
        maxWidth: 700,
        minHeight: 330,
        maxHeight: "calc(100vh - 100px)",
        // overflowY:"auto",
        borderRadius: 10,
        border: "1px solid #e0e0e0",
        [theme.breakpoints.down("md")]: {
            padding: 10,
        },
    },
    taskBox: {
        maxHeight: "calc(100vh - 270px)",
        paddingRight: 10,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            height: "5px !important",
            width: 10,
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#ebebeb",
            borderRadius: 10,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#636363",
            borderRadius: 10,
        },
    },
    taskCardContainer: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 13,
        cursor:"pointer",
        boxShadow: "0 0 13px 0px #aeaeae",
        border: "1px solid #000",
        [theme.breakpoints.down("md")]: {
            padding: 10,
        },
    },
    flex: {
        display: "flex",
    },
    row: {
        marginBottom: 10,
    },
    leftGrid: {
        [theme.breakpoints.down("md")]: {
            marginBottom: "15px !important",
        },
    },
    rightGrid: {
        paddingTop: 20,
        [theme.breakpoints.down("md")]: {
            justifyContent: "center !important",
        },
    },
    btn1: {
        [theme.breakpoints.down("md")]: {
            width: "40%",
        },
        marginRight: "5px!important",
        maxWidth: "120px",
    },
    btn2: {
        [theme.breakpoints.down("md")]: {
            width: "40%",
        },
        maxWidth: "120px",
        marginLeft: "5px!important",
    },
    btn3: {
        width: "fit-content",
        backgroundColor: "#1951f1 !important",
        color: "#fff !important",
        marginBottom: "20px !important",
    },
    fabContainer: {
        padding: "20px 0px 20px 15px",
    },
    fabRoot: {
        backgroundColor: "#a858c9 !important",
        color: "#fff !important",
    },
    doneTasksContainer: {
        width: "600px !important",
        maxWidth: "100%",
        minHeight: 400,
        paddingRight: 10,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            height: "5px !important",
            width: 10,
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#ebebeb",
            borderRadius: 10,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#636363",
            borderRadius: 10,
        },
    },
    doneTasksTitle: {
        marginBottom: 30,
    },
    tasksInformationContainer: {
        position: "relative",
        width: "500px !important",
        maxWidth: "100%",
    },
    taskInformationLevel: {
        width: 35,
        height: 35,
        borderRadius: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    infoTitle: {
        marginBottom: 30,
    },
    infoDesc: {
        "& h5": {
            textAlign: "center",
        },
    },
    infoBtnContainer:{
        marginTop:50
    },
}));
export default useStyles;
