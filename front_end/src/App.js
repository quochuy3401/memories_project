import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { Posts } from "./components/Posts/Posts";
import "./App.css"

import memories from "./images/memories.png";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() =>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className="appbar" position="static" color="inherit">
        <Typography className="appbar-heading" variant="h2" align="center">
          Memories
        </Typography>
        <img className="appbar-img" src={memories} alt="Memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
