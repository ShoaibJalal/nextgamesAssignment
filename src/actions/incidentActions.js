import { GET_INCIDENTS } from "./types";
let Parser = require("rss-parser");
let parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
export const getIncidents = () => async dispatch => {
  let feed = await parser.parseURL(
    CORS_PROXY + "https://status.datadoghq.com/history.rss"
  );

  let recentIncidents = [];
  for (let i = 0; i < 5; i++) {
    recentIncidents.push(feed.items[i]);
  }
  console.log(recentIncidents);

  dispatch({
    type: GET_INCIDENTS,
    payload: recentIncidents
  });
};
