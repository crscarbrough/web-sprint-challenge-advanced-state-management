import axios from "axios";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data.message });
    });
};

export const addSmurf = (newSmurf) => {
  return { type: ADD_SMURF, payload: newSmurf };
};

export const errorMessage = (newErrorMessage) => {
  return { type: ERROR_MESSAGE, payload: newErrorMessage };
};
