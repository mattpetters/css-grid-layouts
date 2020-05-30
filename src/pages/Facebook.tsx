import React from "react";
import styled from "styled-components";

const FAppLayout = styled("div")`
  display: grid;
  height: 100vh;
  margin: auto;
  grid-template-rows: 42px 1fr 42px;
  grid-template-columns: 300px 1fr 300px;
  grid-template-areas:
    "h h h"
    "menu feed birthdays"
    "f f f";
`;

const boxStyle = `
  color: #fff;
  padding: 1em;
  text-align: center;
  font-weight: bold;
`;

const FMenu = styled("div")`
  background-color: #362233;
  grid-area: menu;
  background-color: #e9ebee;
  ${boxStyle}
  color: black;
`;

const FFeed = styled("div")`
  background-color: #52364e;
  color: black;
  padding: 1em;
  text-align: center;
  font-weight: bold;
  grid-area: feed;
  background-color: rgb(255, 255, 255);
`;
const FHeader = styled("div")`
  grid-area: h;
  ${boxStyle}
  background-color: #4267b2;
  height: 20px;
  z-index: 3;
`;
const FBirthdays = styled("div")`
  ${boxStyle}
  grid-area: birthdays;
  background-color: #e9ebee;
  color: #1d2129;
`;

const FMargin = styled("div")`
  background-color: #e9ebee;
  color: #1d2129;
  margin: auto;
`;

const FFooter = styled("div")`
  grid-area: f;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  transition: background-color 0.4s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: -8px;
  z-index: 3;
`;

export const Facebook = (props: any) => {
  return (
    <FMargin>
      <FAppLayout>
        <FMenu>Menu</FMenu>
        <FFeed>Feed</FFeed>
        <FHeader>Header</FHeader>
        <FBirthdays>Birthdays</FBirthdays>
        <FFooter></FFooter>
      </FAppLayout>
    </FMargin>
  );
};
