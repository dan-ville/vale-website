import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 0.3em;
  background: linear-gradient(
    to right bottom,
    rgba(34, 75, 99, 0.6),
    rgba(7, 45, 66, 0.1)
  );
`;
export const CardHeader = styled.div`
  padding: 0.5rem 1rem;
`;
export const CharacterName = styled.h2`
  color: ${props => props.theme.accent};
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
