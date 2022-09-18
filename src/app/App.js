import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import MenuDrawer from "./components/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Newtask from "./pages/new_task_screen";
import Done from "./pages/done_screen";
import ToDoPage from "./pages/to_do_screen";
import { useDispatch } from "react-redux";
import { create } from "./store/toDoActions";

function App() {


  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/newtask" element={< Newtask />} />
          <Route path="/todo" element={< ToDoPage />} />
          <Route path="/done" element={< Done />} />
          <Route path="/" element={< Newtask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;