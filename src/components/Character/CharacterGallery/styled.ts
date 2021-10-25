import styled from "styled-components";

export const Wrapper = styled.div``;
export const GalleryGrid = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  width: 95%;
  padding: 3rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 275px);
  grid-auto-rows: 400px;
  justify-content: center;
`;
export const InputsWrapper = styled.div`
  max-width: 1600px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const SearchField = styled.input`
  width: 300px;
  color: black;
  padding: 0.2em;
  font-size: 1.5rem;
  
  &:focus {
    border: 2px solid ${props => props.theme.accent};
    border-radius: 0.2em;
    outline: none;
  }
`;
