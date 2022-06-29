import { useSelector } from "react-redux";
import { Post } from "./Post/Post";

export const Posts = () => {
  const posts = useSelector(state=> state.posts)

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};
