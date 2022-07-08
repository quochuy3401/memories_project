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
import { DeleteIcon, MoreHorizIcon } from "@mui/icons-material";
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

export const Post = (props) => {
  const { post, setCurrentId } = props;
  const {_id, creator, title, content, tags, selectedFile, likeCount, createdAt } = post;

  return (
    <Card className="card-post">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {creator[0]}
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
        <Typography className="bold-text" variant="body2">
          {likeCount > 1 ? `${likeCount} likes` : `${likeCount} like`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="bold-text">{creator}</span> &nbsp;{content} <br />
          <span className="post-tags">
            {tags.map((tag, index) => (
              <a href="#" key={index}>
                #{tag}{" "}
              </a>
            ))}
          </span>
        </Typography>
      </CardContent>
      <CardActions className="card-icons">
        <div>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              console.log("like");
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              console.log("delete");
            }}
          >
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
