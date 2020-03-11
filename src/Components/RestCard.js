import React, { useState } from 'react';
// import axios from "axios";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
// import { api } from "../utils/api";
import { deleteEvent } from "../actions/actions";
// import { ExerciseContext } from "../context";
// import { ContactContext } from "../reducers/reducers";
function RestCard({restaurant}) {
 //const [state, dispatch] = useContext(ContactContext);
 //const { state, dispatch } = useContext(ExerciseContext);
  const [blog, setBlog] = useState([]);

//  const handleDelete = async id => {
//     try {
//       const response = await axios
//       .delete(`https://restaurant-tracker-be.herokuapp.com/restaurants/${id}`);
//       dispatch({
//         type: "DELETE_SUCCESS",
//         payload: response.data
//       });
//     } catch (error) {
//       (console.log(error))
//     }
//   }

    const handleDelete = (event, id, props) => {

    // const workout = [blog.find(workout => workout.id === id)];

    if (window.confirm("Are you sure?!")) {
       deleteEvent(id, blog)
      setBlog(blog.filter(entry => entry.id !== id));
    }
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
)(withRouter(RestCard));
