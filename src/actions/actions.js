import { api } from "../utils/api";
import { history } from "../index";


export const NEW_TASK_START = "NEW_TASK_START";
export const NEW_TASK_SUCCESS = "NEW_TASK_SUCCESS";
export const NEW_TASK_ERROR = "NEW_TASK_ERROR";

export const addTask = formValues => dispatch => {
  const makeTask = {
    name: formValues.name,
    date: formValues.date,
  };
  dispatch({ type: NEW_TASK_START });
  api()
    .post("/restaurants", makeTask)
    .then(response => {
      history.push("/");
      console.log(response);
      dispatch({ type: NEW_TASK_SUCCESS });

    })
    .catch(error => {
      console.log(error);
      dispatch({ type: NEW_TASK_ERROR });
    });
};