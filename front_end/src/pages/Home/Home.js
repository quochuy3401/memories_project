import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import "./Home.css";

import { Posts } from "../../components/Posts/Posts";
import { Form } from "../../components/Form/Form";

import {getPosts} from "../../actions/posts"

export default function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing="3"
        >
          <Grid item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
