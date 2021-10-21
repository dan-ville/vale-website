import styled from "styled-components";
import { Button } from "../../pageStyles";

export const Summary = styled.section`
  width: 95%;
  max-width: clamp(45ch, 50%, 75ch);
  margin: 0 auto;
  padding: 2rem 0;
  text-align: left;

  > * {
    margin: 1rem 0;
  }
  line-height: 2;
`;
export const SummaryHeading = styled.h2`
  text-align: center;
`;
export const SummaryAccent = styled.p`
  color: ${(props) => props.theme.accent};
  font-weight: 600;
`;
export const CTA = styled.div`
  text-align: center;
`;
export const ButtonCTA = styled(Button)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  opacity: 0.9;

  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.text.light};
    border: 1px solid ${(props) => props.theme.text.light};
  }
`;
