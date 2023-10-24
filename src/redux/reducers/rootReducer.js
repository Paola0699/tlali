import { combineReducers } from "redux";
import menuReducer from "./menu";
import blogReducer from "./blog";
import userReducer from "./user";

const rootReducer = combineReducers({
  menu: menuReducer,
  blog: blogReducer,
  user: userReducer,
});

export default rootReducer;
