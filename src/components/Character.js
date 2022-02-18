// Write your Character component here
import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 30%;
  margin: 3%;
  font-weight: 600;
  height: 30%;
  background-color: #e8e5da;
`;

export default function Character(props) {
  const { info } = props;
  return (
    <ContainerStyle>
      <h3>{props.info.name}</h3>
      <p>{props.info.birth_year}</p>
      <p>Weight:{Math.round(props.info.mass * 2.2)} lbs</p>
      <p>
        Appears in the Following Films:
        <br />
        <br />
        {props.info.films.join(",  ")}
      </p>
    </ContainerStyle>
  );
}
