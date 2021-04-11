import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get("https://raw.githubusercontent.com/maulanairfanf/Json/main/db.json")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
      return response.data;
    });
};
