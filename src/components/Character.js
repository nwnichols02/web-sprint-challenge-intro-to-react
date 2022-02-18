// Write your Character component here
import React from "react";

export default function Character ({ info }) {
    return (
        <div>
            <div>
                <h3>{info.name}</h3>
                <p>{info.birth_year}</p>
                <p>Weight(LBS):{Math.round(info.mass * 2.2)}</p>
            </div>
        </div>
    )
}