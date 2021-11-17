import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import contentReducer from "./contentReducer";

const reducers = combineReducers({
  profile: profileReducer,
  menu: menuReducer,
  content: contentReducer,
});

export default reducers;
