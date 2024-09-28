import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./posts.slice";
import postReducer from "./post.slice";
import signUpReducer from "./signup.slice";
import logInReducer from "./login.slice";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  signUp: signUpReducer,
  logIn: logInReducer,
})

export default rootReducer;