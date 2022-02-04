import styled from "styled-components"
import { Button } from "../../../pageStyles"

export const Card = styled(Button)`
  padding: 0;
  border: 1px solid ${(props) => props.theme.bg};
  overflow: hidden;
  border-radius: 0.3em;
  text-align: left;
  background: linear-gradient(
    to right bottom,
    rgba(34, 75, 99, 0.6),
    rgba(7, 45, 66, 0.1)
  );
  position: relative;
  &:hover {
    cursor: pointer;
  }
`
export const CardHeader = styled.div`
  padding: 0.5rem 1rem;
`
export const CharacterName = styled.h2`
  /* color: ${(props) => props.theme.accent}; */
  font-size: 1.75rem;
  font-weight: 700;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
