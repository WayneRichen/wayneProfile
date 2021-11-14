import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";

const reducers = combineReducers({
  profile: profileReducer,
  menu: menuReducer,
});

export default reducers;
