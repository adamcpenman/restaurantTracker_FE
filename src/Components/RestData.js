import React, { useState, useEffect } from "react";
import axios from "axios"
import RestCard from "./RestCard"

function RestData() {
    const [rest, setRest] = useState([]);

    useEffect(() => {
        const getRestData = () => {
            axios  
                .get("http://localhost:4000/restaurants")
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
                {rest.map(restaurant => (
                    <RestCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </section>
        </div>
    )
}

export default RestData