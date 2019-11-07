import { GET_STATUSES, ADD_STATUS } from "./types";

export const getStatuses = () => {
  return {
    type: GET_STATUSES
  };
};

export const addStatus = status => {
  return {
    type: ADD_STATUS,
    payload: status
  };
};
