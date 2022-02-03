import styled from "styled-components"

export const GalleryGrid = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 275px);
  grid-auto-rows: 400px;
  justify-content: center;
`
export const InputsWrapper = styled.div`
  margin: 0 auto 2rem;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`
export const SearchField = styled.input`
  padding: 0.2em 0.3em;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.bg};
  outline: 1px solid ${(props) => props.theme.accent};
  border-radius: 0.2em;
  border: none;

  &:focus {
    outline: 2px solid ${(props) => props.theme.accent};
    border-radius: 0.2em;
  }
`
export const SelectField = styled.select`
  padding: 0.2em;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.bg};
  outline: 1px solid ${(props) => props.theme.accent};
  border-radius: 0.2em;
  border: none;

  &:focus {
    outline: 2px solid ${(props) => props.theme.accent};
    border-radius: 0.2em;
  }
`
