import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Todo from "../components/Todo";
import { complete, getTodos } from "../store/toDoActions";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import CenterBox from "../components/CenterBox";
import MenuDrawer from "../components/Menu";

function ToDoPage() {
  const todos = useSelector((state) =>
    state.actions.todos.filter((t) => t.completed === false), shallowEqual
  );

  return (
    <MenuDrawer>

      <CenterBox>
        <Grid container spacing={1.5} padding={5} justifyContent='center'>
          <Grid item={true} xs={11}>
            <Typography align="center" color="white" fontSize={60} >
              To Do
            </Typography>
          </Grid>

          {todos && todos?.map((obj, index) => (
            <Grid key={obj.id} item={true} xs={9}>
              <Todo todo={obj} />
            </Grid>
          ))}

        </Grid>

      </CenterBox>
    </MenuDrawer>
  );
}

export default ToDoPage;
