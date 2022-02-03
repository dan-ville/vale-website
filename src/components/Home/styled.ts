import styled from "styled-components"

export const Summary = styled.section`
  width: 95%;
  max-width: clamp(45ch, 50%, 75ch);
  margin: 0 auto;
  text-align: left;
  font-size: 1.3rem;
  > * {
    margin: 1rem 0;
  }
  line-height: 1.5;
`
export const SummaryHeading = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
`
export const SummaryAccent = styled.p`
  color: ${(props) => props.theme.accent};
  font-weight: 600;
`
export const CTA = styled.div`
  text-align: center;
`
