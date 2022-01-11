import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import contentReducer from "./contentReducer";
import experienceReducer from "./experienceReducer";

const reducers = combineReducers({
  profile: profileReducer,
  menu: menuReducer,
  content: contentReducer,
  experience: experienceReducer,
});

export default reducers;
