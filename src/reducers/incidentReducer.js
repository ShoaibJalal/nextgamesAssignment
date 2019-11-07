import { GET_INCIDENTS } from "../actions/types";

const initialState = {
  incidents: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENTS:
      return { ...state, incidents: action.payload };
    default:
      return state;
  }
}
