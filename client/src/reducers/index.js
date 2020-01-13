import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import goal from "./goal";

export default combineReducers({ alert, auth, profile, goal });
