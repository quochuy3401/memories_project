import { TextField, Button, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import "./Form.css";

export const Form = (props) => {
  const { currentId, setCurrentId } = props;
  const defaultValues = {
    creator: "",
    title: "",
    content: "",
    tags: "",
    selectedFile: "",
  };
  const selectedPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  const [postData, setPostData] = useState(defaultValues);

  useEffect(() => {
    if (selectedPost) {
      setPostData(selectedPost);
    }
  }, [selectedPost]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setCurrentId(null);
    setPostData(defaultValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handleClear();
  };

  return (
    <Paper className="create-post">
      <form
        className="create-post--form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          className="post-textfield"
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          className="post-textfield"
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          className="post-textfield"
          name="content"
          variant="outlined"
          label="Content"
          multiline
          maxRows={3}
          fullWidth
          value={postData.content}
          onChange={handleChange}
        />
        <TextField
          className="post-textfield"
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="create-post--fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className="button-submit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="button"
          fullWidth
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
