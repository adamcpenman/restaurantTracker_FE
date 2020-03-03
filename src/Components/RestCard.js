import React from 'react';

function RestCard({restaurant}) {
    return (
        <div>
            <div>
                <h1>Restaurant: {restaurant.name}</h1>
                <h2>Date: {restaurant.date}</h2>
            </div>
        </div>
    )
}

export default RestCard;