import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { Form } from "./components/Form/Form";
import { Posts } from "./components/Posts/Posts";
import "./App.css"

import memories from "./images/memories.png";

function App() {
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
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
