import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText, Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

function MenuDrawer({ children }) {
  var todos = useSelector(
    (state) => state.actions.todos.filter((t) => t.completed === false),
    shallowEqual
  );

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Grid container direction="row" alignItems="stretch">
        <Grid container xs={2} item={true}>
          <Box sx={{ backgroundColor: "#262338", width: "100%" }}>
            <ProfileCard />
            <List>
              {[
                {
                  text: "Insert Task",
                  route: "/newtask",
                },
                {
                  text: "Todo",
                  route: "/todo",
                },
                {
                  text: "Done",
                  route: "/done",
                },
              ].map((obj, index) => (
                <ListItem key={obj.text} disablePadding>
                  <Link
                    to={obj.route}
                    style={{
                      width: "100%",
                      textDecoration: "none",
                      position: "relative",
                      display: "flex",
                    }}
                  >
                    <ListItemButton key={index}>
                      <PanoramaFishEyeIcon
                        sx={{ color: "white", padding: 0.5 }}
                      />
                      <ListItemText
                        primary={obj.text}
                        sx={{ color: "whitesmoke" }}
                      />
                      {obj.text === "Todo" && (
                        <p
                          style={{
                            borderRadius: 8,
                            alignSelf: "end",
                            textDecoration: "none",
                            fontSize: 10,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingLeft: 8,
                            paddingRight: 8,
                            backgroundColor: "#A996FF",
                            color: "#14142B",
                            textAlign: "center",
                          }}
                        >
                          {todos?.length}
                        </p>
                      )}{" "}
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid container xs={10} item={true}>
          <Box sx={{ flexGrow: 1, bgcolor: "white", p: 5 }}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MenuDrawer;
