import styled from "styled-components"

export const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  min-height: 100vh;
`
export const PageWrapper = styled.div`
  max-width: 1600px;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`
export const PageTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
  color: ${(props) => props.theme.accent};
  font-family: "Angel Wish", cursive;
  text-align: center;
  margin: 1rem auto;
`
export const Button = styled.button`
  font-size: 1rem;
  background-color: ${(props) => props.theme.bg};
  padding: 0.3em 0.5em;
  text-decoration: none;
  border-radius: 0.2em;
  color: ${(props) => props.theme.text.light};
  transition: all 0.3s ease;
  outline: 2px solid ${(props) => props.theme.bg};

  &:focus {
    outline: 2px solid ${(props) => props.theme.accent};
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accent};
    border: 1px solid ${(props) => props.theme.accent};
  }
`
export const UnderConstruction = styled.section`
  text-align: center;
`
export const ButtonCTA = styled(Button)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  opacity: 0.9;
  &:focus {
    outline: 2px solid ${(props) => props.theme.text.light};
  }
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.text.light};
    border: 1px solid ${(props) => props.theme.text.light};
  }
`
