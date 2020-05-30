import React from "react";
import styled from "styled-components";

const SAppLayout = styled("div")`
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "teams channels header" "teams channels messages" "teams channels input";
`;

const boxStyle = `
  color: #fff;
  padding: 1em;
  text-align: center;
  font-weight: bold;
`;

const STeams = styled("div")`
  grid-area: teams;
  background-color: #362233;
  ${boxStyle}
`;

const SChannels = styled("div")`
  grid-area: channels;
  background-color: #52364e;
  ${boxStyle}
`;
const SHeader = styled("div")`
  grid-area: header
  ${boxStyle}
  background-color: #ffffff;
`;
const SMessages = styled("div")`
  grid-area: messages;
  overflow-y: scroll;
  ${boxStyle}
`;
const SInputContainer = styled("div")`
  ${boxStyle}
  grid-area: input;
`;

const SInput = styled("input")`
  width: 100%;
  padding: 1em;
  outline: none;
  border: 1px solid #f2f2f2;
`;

const SMessageListItem = styled("li")`
  padding: 0.2em;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: #f2f2f2;
  color: black;
  list-style: none;
`;

const SMessageList = styled("ul")`
  margin: 0;
  padding: 0;
`;

export const Slack = (props: any) => {
  return (
    <SAppLayout>
      <STeams>Teams</STeams>
      <SChannels>Channels</SChannels>
      <SHeader>Header</SHeader>
      <SMessages>
        <SMessageList>
          <SMessageListItem>Hey man?</SMessageListItem>
          <SMessageListItem>Hey man?</SMessageListItem>
          <SMessageListItem>Hey man?</SMessageListItem>
          <SMessageListItem>Hey man?</SMessageListItem>
        </SMessageList>
      </SMessages>
      <SInputContainer>
        <SInput type="text" placeholder="Message channel" />
      </SInputContainer>
    </SAppLayout>
  );
};
