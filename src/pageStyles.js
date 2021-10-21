import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  min-height: 100vh;
`;
export const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  color: ${(props) => props.theme.accent};
  font-family: "Trade Winds", cursive;
  text-align: center;
`;
