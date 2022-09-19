import {
  Button,
  Chip,
  IconButton,
} from "@material-ui/core";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { complete } from "../store/toDoActions";

export default function Todo({ todo }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(complete(todo.id));
  };

  function selectButonColorBasedOnPriority(priority) {
    let obj = { borderRadius: 5, background: "pink", color: "red" };
    switch (priority) {
      case "Urgent":
        obj.background = "pink";
        obj.color = "red";
        break;
      case "High":
        obj.background = "orange";
        obj.color = "white";
        break;
      case "Medium":
        obj.background = "yellow";
        obj.color = "grey";
        break;
      case "Low":
        obj.background = "green";
        obj.color = "white";
        break;
      default:
        obj.background = "white";
        obj.color = "white";
        break;
    }
    return obj;
  }
  return (
    <>
      <div
        onClick={handleExpand}
        style={{ backgroundColor: "white", width: "100%", borderRadius: 8 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between",paddingLeft: 10, paddingRight: 10, alignItems: 'center'}}>
          <h4 style={{fontWeight: 'bold'}}>{todo.title}</h4>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center'}}>
            {!todo.completed ? (
              <Chip
                label={todo.priority}
                style={selectButonColorBasedOnPriority(todo.priority)}
              />
            ) : null}
            <IconButton aria-label="settings" onClick={handleExpand}>
              {expanded ? <Remove /> : <Add />}
            </IconButton>
          </div>
        </div>
        {expanded ? (
          <div style={{ backgroundColor: "white", width: "100%", borderRadius: 8, paddingBottom: 10 }}>
            <p style={{color: '#4E4B66', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, margin: 0}}>{todo.title}</p>
            {!todo.completed ? (
            <Button
              variant="contained"
              autoCapitalize="false"
              onClick={handleComplete}
              style={{
                borderRadius:"35px",
                marginRight: 20,
                marginLeft: "auto",
                display: "block",
                textTransform: "none",
                color:'white',
                backgroundColor:"#4700ab",
              }}
            >
              Complete
            </Button>
          ) : (
            <></>
          )}
          </div>
        ) : null}
      </div>
    </>
  );
}
