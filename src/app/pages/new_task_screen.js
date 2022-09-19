import { useSelector, useDispatch } from 'react-redux';
import MenuDrawer from '../components/Menu';
import CenterBox from "../components/CenterBox";
import { Grid, TextField, Button, Typography, MenuItem } from '@mui/material';
import { create } from "../store/toDoActions.js";
import * as yup from "yup";
import { useFormik } from "formik";


const validationSchema = yup.object({
    title: yup.string("Enter task title").required("Task title is required"),
    reply: yup
        .string("Please share a reply")
        .min(5, "Reply should be of minimum 5 characters length")
        .required("Reply is required"),
});

function Newtask() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    const priorityOptions = [
        { value: "Urgent", label: "Urgent" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" }
    ];


    const formik = useFormik({
        initialValues: {
            title: "",
            reply: "",
            priority: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(create(values));
            formik.resetForm();
        },
    });
    return (
        <MenuDrawer>
            <CenterBox>
                <Grid container padding={5} justifyContent='center'>
                    <Grid item={true} xs={11}>
                        <Typography align="center" color="white" fontSize={55} >
                            Insert Task
                        </Typography>
                    </Grid>


                    <Grid key={"title"} paddingTop={1} item={true} xs={10}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            fullWidth
                            label="Title"
                            sx={{
                                backgroundColor: "#4E4B66",
                                borderRadius: "17px",
                                border: "Background",
                                color: "white",

                            }}
                            InputProps={{ disableUnderline: true }}
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item={true} key={"reply"} paddingTop={3} xs={10}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            fullWidth
                            label="Reply"
                            multiline
                            rows={8}

                            sx={{
                                backgroundColor: "#4E4B66",
                                borderRadius: "17px",
                                border: "Background",
                                color: "white",

                            }}
                            InputProps={{ disableUnderline: true }}
                            id="reply"
                            name="reply"
                            value={formik.values.reply}
                            onChange={formik.handleChange}
                            error={formik.touched.reply && Boolean(formik.errors.reply)}
                            helperText={formik.touched.reply && formik.errors.reply}
                        />
                    </Grid>
                    <Grid
                        container
                        item={true}
                        xs={10}
                        direction="row"
                        paddingTop={3}
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item={true} key={"selector"} xs={7}>
                            <TextField
                                select
                                margin="normal"
                                variant="filled"
                                label="Priority"
                                onChange={formik.handleChange}
                                sx={{
                                    backgroundColor: "#4E4B66",
                                    borderRadius: "17px",
                                    border: "Background",
                                    color: "white",
                                }}
                                InputProps={{ disableUnderline: true }}
                                fullWidth
                                value={formik.values.priority}
                                name="priority"
                            >
                                {priorityOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item={true} key={"button"} xs={4}>
                            <Button
                                variant="contained"
                                autoCapitalize="false"
                                fullWidth
                                onClick={formik.handleSubmit}
                                style={{
                                    borderRadius: "12px",
                                    marginTop: "5px",
                                    display: "block",
                                    textTransform: "none",
                                    color: '#4700ab',
                                    backgroundColor: "#A996FF",
                                    fontSize:"19px",
                                }}
                            >
                                Insert
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CenterBox>
        </MenuDrawer>
    );
}
export default Newtask;     