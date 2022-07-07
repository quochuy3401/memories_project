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
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { red } from "@mui/material/colors";
import moment from "moment";
import "./Post.css";

export const Post = (props) => {
  const { creator, title, message, tags, selectedFile, createdAt } = props.post;

  return (
    <Card className="card-post">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {creator[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={moment(createdAt).fromNow()}
      />
      <CardMedia component="img" image={selectedFile} alt={title} height="500"/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span className="bold-text">{creator}</span> &nbsp;{message} <br />
          <span className="post-tags">
            {tags.map((tag) => (
              <a href="#">#{tag} </a>
            ))}
          </span>
        </Typography>
      </CardContent>
      <CardActions className="card-icons">
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
