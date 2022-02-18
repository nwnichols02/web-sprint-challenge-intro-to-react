// Write your Character component here
import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
    background-color: #e8e5da;
    width: 100%;
    // display: flex;
    // text-align: center;
    // justify-content: center;
    // margin-left: 500px;
    margin-right: 500px;
    display: block;
`;

const ContainerStyle = styled.div`
    // display:flex;
    // align-content: space-between
    // justify-content: space-between;
    flex-wrap: row wrap;
`;



export default function Character ({ info }) {
    return (
        // <ContainerStyle>
            <DivStyle>
                <h3>{info.name}</h3>
                <p>{info.birth_year}</p>
                <p>Weight(LBS):{Math.round(info.mass * 2.2)}</p>
                <p>Appears in the Following Films:<br/>{info.films.join(',  ')}</p>
            </DivStyle>
        // </ContainerStyle>
    )
}