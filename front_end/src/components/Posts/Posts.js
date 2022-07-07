import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import { Post } from "./Post/Post";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className= "posts-container" container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
