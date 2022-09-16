import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Grid } from '@material-ui/core';

import Navigation from './componens/navigation/navigation';
import Newtask from './componens/new_task_screen';
import Done from './componens/done_screen';
import Todo from './componens/to_do_screen';


function App() {
  return (
      <Router>
      <Grid className='gridWrapper' container>
        <Grid item xs={2} className="sideBarWrapper">
          <Navigation />
        </Grid>
        <Grid item xs={10}>
        <Routes>
          <Route path="/newtask" element={< Newtask/>} />
          <Route path="/todo" element={< Todo/>} />
          <Route path="/done" element={< Done/>} />
        </Routes>
        </Grid>
      </Grid>
    </Router> 
  );
}





export default App;
