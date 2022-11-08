import React from 'react';

const PersonCard = props => {
    return(
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                Age: {props.age}
                <br />
                Hair Color:{props.hairColor}
            </div>
        );
    }

export default PersonCard;