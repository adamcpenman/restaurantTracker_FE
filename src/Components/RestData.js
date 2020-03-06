import React, { useState, useEffect } from "react";
import axios from "axios"
import RestCard from "./RestCard"
import {Link} from "react-router-dom"

//https://restaurant-tracker-be.herokuapp.com/

function RestData() {
    const [rest, setRest] = useState([]);

    useEffect(() => {
        const getRestData = () => {
            axios  
                .get("https://restaurant-tracker-be.herokuapp.com/restaurants")
                .then(response => {
                    setRest(response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        getRestData();
    }, [])
    return (
        <div>
            <section>
                {}
                {rest.map(restaurant => (
                    <RestCard key={restaurant.id} restaurant={restaurant} />
                ))}
                {/* {rest.map(r => ( <div
                key={r.id}>
                    <h1>{r.name}</h1>
                    <h1>{r.date}</h1>
                </div>)
                )} */}
            </section>
            <Link to="add-task"> Add </Link>
        </div>
    )
}

export default RestData