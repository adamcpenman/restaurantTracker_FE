import { api } from "../utils/api";
import { history } from "../index";


export const NEW_REST_START = "NEW_REST_START";
export const NEW_REST_SUCCESS = "NEW_REST_SUCCESS";
export const NEW_REST_ERROR = "NEW_REST_ERROR";

export const addRest = formValues => dispatch => {
  const makeRest = {
    name: formValues.name,
    date: formValues.date,
  };
  dispatch({ type: NEW_REST_START });
  api()
    .post("/restaurants", makeRest)
    .then(response => {
      history.push("/");
      console.log(response);
      dispatch({ type: NEW_REST_SUCCESS });

    })
    .catch(error => {
      console.log(error);
      dispatch({ type: NEW_REST_ERROR });
    });
};