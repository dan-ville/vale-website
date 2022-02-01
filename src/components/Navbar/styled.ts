import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  padding: 1rem;
  max-width: 95%;
  margin: 0 auto;
`
export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`
export const NavItem = styled(Link)`
  font-size: 1rem;
  padding: 0.3em 0.5em;
  margin: 0 0.5em;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.text.light};
  border-radius: 0.2em;
  color: ${(props) => props.theme.text.light};
  transition: all 0.3s ease;
  &:focus,
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accent};
    border: 1px solid ${(props) => props.theme.accent};
  }
`
