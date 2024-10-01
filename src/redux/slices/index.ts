import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts.slice";
import postReducer from "./post.slice";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer
})

export default rootReducer;