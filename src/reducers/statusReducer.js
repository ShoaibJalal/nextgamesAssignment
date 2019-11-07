import { GET_STATUSES, ADD_STATUS } from "../actions/types";
import uuid from "uuid";

const initialState = {
  statuses: [
    {
      id: uuid(),
      region: "EAST US",
      productAndServices: "Virtual Machines",
      status: "Good"
    },
    {
      id: uuid(),
      region: "EAST US2",
      productAndServices: "Azure Functions",
      status: "Information"
    },
    {
      id: uuid(),
      region: "North Europe",
      productAndServices: "Cloud services",
      status: "Warning"
    }
  ],
  status: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STATUSES:
      return {
        ...state
      };

    case ADD_STATUS:
      return {
        ...state,
        statuses: [action.payload, ...state.statuses]
      };

    default:
      return state;
  }
}
