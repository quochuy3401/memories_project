import { combineReducers } from "redux";
import postsReducer from "./posts";
import userReducer from "./user"

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer
});

export default rootReducer;
