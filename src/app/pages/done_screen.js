import  CenterBox  from "../components/CenterBox";
import Todo from "../components/Todo";
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import MenuDrawer from "../components/Menu";


function Done() {
    let todos = useSelector((state) =>
        state.actions.todos.filter((t) => t.completed === true)
    );

    return (
        <MenuDrawer>
            <CenterBox>
                <Grid container spacing={1.5} padding={5} justifyContent='center'>
                    <Grid item={true} xs={11}>
                        <Typography align="center" color="white" fontSize={60} >
                            Done
                        </Typography>
                    </Grid>

                    {todos?.map((obj, index) => (
                        <Grid key={obj.id} item={true} xs={9}>
                            <Todo todo={obj} />
                        </Grid>
                    ))}

                </Grid>

            </CenterBox>
        </MenuDrawer>
    );
}

export default Done;
