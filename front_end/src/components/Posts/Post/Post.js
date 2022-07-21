import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
// import { DeleteIcon, MoreHorizIcon } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";
import moment from "moment";
import "./Post.css";
import { likePost, deletePost } from "../../../actions/posts";

export const Post = (props) => {
  const { post, setCurrentId } = props;
  const {
    _id,
    creator,
    name,
    title,
    content,
    tags,
    selectedFile,
    likes,
    createdAt,
  } = post;
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("profile"));

  const handleLikePost = () => {
    dispatch(likePost(_id));
  };

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  return (
    <Card className="card-post">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => {
              setCurrentId(_id);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={moment(createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        image={selectedFile}
        alt={title}
        height="500"
      />
      <CardContent>
        {likes.length > 0 && (
          <Typography className="bold-text" variant="body2">
            {likes.length > 1
              ? `${likes.length} likes`
              : `${likes.length} like`}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          <span className="bold-text">{name}</span> &nbsp;{content} <br />
          <span className="post-tags">
            {tags.map((tag, index) => (
              // eslint-disable-next-line
              <a href="#" key={index}>
                #{tag}
              </a>
            ))}
          </span>
        </Typography>
      </CardContent>
      <CardActions className="card-icons">
        <div>
          <IconButton aria-label="add to favorites" onClick={handleLikePost}>
            {likes.findIndex((id) => id === user._id) > -1 ? (
              <FavoriteIcon color="error"/>
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </div>
        <IconButton style={{ float: "right" }} aria-label="bookmark">
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
// disableSpacing
