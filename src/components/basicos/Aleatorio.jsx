import React from "react";

export default function Random(props){

    const {min, max} = props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return(
        <div>
            <h3>Valor Aleatorio: {randomNumber}</h3>
        </div>
    )

}