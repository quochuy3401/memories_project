import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import { Post } from "./Post/Post";

export const Posts = (props) => {
  const { setCurrentId } = props;
  const posts = useSelector((state) => state.posts);
  // props drilling

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className="posts-container"
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12}>
          <Post post={post} setCurrentId={setCurrentId} /> 
        </Grid>
      ))}
    </Grid>
  );
};

