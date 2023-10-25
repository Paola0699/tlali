import { combineReducers } from "redux";
import menuReducer from "./menu";
import blogReducer from "./blog";
import userReducer from "./user";
import usersReducer from "./users";

const rootReducer = combineReducers({
  menu: menuReducer,
  blog: blogReducer,
  user: userReducer,
  users: usersReducer
});

export default rootReducer;
