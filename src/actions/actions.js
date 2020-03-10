import { api } from "../utils/api";
import { history } from "../index";
import axios from "axios"


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
      
      console.log(response);
      dispatch({ type: NEW_REST_SUCCESS });
      history.push("/");

    })
    .catch(error => {
      console.log(error);
      dispatch({ type: NEW_REST_ERROR });
    });
};

// export const DELETE_START = "DELETE_START";
// export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS"

// export const deleteEvent = (id, history) => dispatch => {
//   dispatch({ type: DELETE_SUCCESS });
//   api()
//     .delete(`/restaurants/${id}`)
//     .then(response => {
//       console.log(response);
//       history.push("/");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export const deleteEvent = (id, dispatch) => {
  axios
    .delete(`https://restaurant-tracker-be.herokuapp.com/restaurants/${id}`)
    .then(res => {
      console.log(`axios DELETE response:`);
      console.log(res);
      window.location.reload()

      //not working yet
      dispatch({ type: DELETE_SUCCESS });
      //return state.filter(({ id }) => id !== action.payload);

    })
    .catch(err => {
      console.log(err);
    });
};


