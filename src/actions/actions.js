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
      history.push("/");
      console.log(response);
      dispatch({ type: NEW_REST_SUCCESS });

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

export const deleteEvent = (id, exerciseState, exercise, dispatch) => {
  axios
    .delete(`https://restaurant-tracker-be.herokuapp.com/restaurants/${id}`, exercise)
    .then(res => {
      console.log(`axios DELETE response:`);
      console.log(res);
      window.location.reload()

      // the response is just a success message; we need to adjust the state ourselves
    //   const newExercise = exerciseState.exerciseInfo[0].filter(
    //     item => item.id !== id
    //   );
    // const workout = [exercise.filter(workout => workout.id === id)];
      dispatch({ type: DELETE_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

// export const deleteEvent = restaurant => (id, dispatch) => async dispatch => {
//   try {
//  await axios
//     .delete(`https://restaurant-tracker-be.herokuapp.com/restaurants/${id}`, restaurant)
//     .then(res => {
//       console.log(`axios DELETE response:`);
//       console.log(res);
//       dispatch({ type: DELETE_SUCCESS });
//       window.location.reload()
    
//       // the response is just a success message; we need to adjust the state ourselves
//     //   const newExercise = exerciseState.exerciseInfo[0].filter(
//     //     item => item.id !== id
//     //   );
//     // const workout = [exercise.filter(workout => workout.id === id)];
      
//     }) 
//     } catch (err) {
//       console.log(err);
//     };
//   }

