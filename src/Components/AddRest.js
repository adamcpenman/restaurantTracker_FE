import React, { useState } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addRest } from "../actions/actions";


function AddRest(props){
    const [newRest, setNewRest] = useState({
        name: "",
        date: "",
    })

      const handleSubmit = e => {
    e.preventDefault();
    props.addRest(newRest);
  };

    const handleChange = e => {
        setNewRest({
            ...newRest,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = e => {
    //     // e.preventDefault();
    //      axios
    //         .post("http://localhost:4000/restaurants/",
    //         newRest)
    //         .then(res => setNewRest({
                
    //             name: "",
    //             date: ""
    //         }))
    //         .catch(error => {
    //             console.log(error, "Could not create new entry")
    //         })
    //    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newRest.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={newRest.date}
                    onChange={handleChange}
                />
                {/* <button type="submit">Add Restaurant</button> */}
                <button
            type="submit"
            onClick={() => props.addRest(newRest, props.history)}
          >
            Add Exercise
          </button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addRest }
)(withRouter(AddRest));
// export default AddRest