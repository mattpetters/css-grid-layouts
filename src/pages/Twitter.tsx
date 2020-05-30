import React from "react";
import styled from "styled-components";

const TAppLayout = styled("div")`
  display: grid; /* 1 */
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: "menu tweets trends";

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50vh 50vh;
  }
`;

const TTweets = styled("div")`
  background: rgba(29, 161, 242, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  grid-area: tweets;
`;

const TTrends = styled("div")`
  background: rgba(32, 130, 242, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  grid-area: trends;
`;

const TNews = styled("div")`
  background: rgba(32, 130, 242, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  grid-area: trends;
`;
const TSearch = styled("div")`
  background: rgba(32, 130, 242, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  grid-area: search;
`;
const TMenu = styled("div")`
  background: rgba(32, 130, 242, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  grid-area: menu;
`;

export const Twitter = (props: any) => {
  return (
    <TAppLayout>
      <TTweets>Tweets</TTweets>
      <TMenu>Menu</TMenu>
      <TTrends>
        <TSearch>Search</TSearch>

        <TNews>News</TNews>
      </TTrends>
    </TAppLayout>
  );
};
