import { combineReducers } from "redux";
import statusReducer from "./statusReducer";
import incidentReducer from "./incidentReducer";

export default combineReducers({
  status: statusReducer,
  incident: incidentReducer
});
