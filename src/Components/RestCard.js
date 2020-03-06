import React, { useState, useContext } from 'react';

import { connect } from "react-redux";
import { api } from "../utils/api";
import { deleteEvent } from "../actions/actions";
import { ExerciseContext } from "../context";

function RestCard({restaurant}) {
 //const { exerciseState, dispatch } = useContext(ExerciseContext);
  const [exercise, setExercise] = useState([]);
    //const id = Number.parseInt(props.match.params.id);

    const handleDelete = (event, id, props) => {
    //event.preventDefault();
    // const workout = [exercise.find(workout => workout.id === id)];

    // if (window.confirm("Are you sure?!")) {
    //   setExercise(exercise.filter(workout => workout.id !== id));

      deleteEvent(id, exercise)
      setExercise(exercise.filter(workout => workout.id !== id));

    //   api()
    //     .delete(`/restaurants/${id}`)
    //     .then(result => {
    //       console.log("workout was TERMINATED");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       setExercise([...exercise, workout]);
    //     });
    // }
  };

    return (
        <div>
            <div>
                <h1>Restaurant: {restaurant.name}</h1>
                <h2>Date: {restaurant.date}</h2>
            </div>

<button onClick={e => handleDelete(e, restaurant.id)}>delete</button>

        </div>
    )
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteEvent }
)(RestCard);