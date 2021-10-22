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
export const Button = styled.button`
  font-size: 1rem;
  background-color: ${(props) => props.theme.bg};
  padding: 0.3em 0.5em;
  margin: 1em 0;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.text.light};
  border-radius: 0.2em;
  color: ${(props) => props.theme.text.light};
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accent};
    border: 1px solid ${(props) => props.theme.accent};
  }
`;
export const UnderConstruction = styled.section`
  text-align: center;
`;
