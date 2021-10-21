import styled from "styled-components";

export const GalleryGrid = styled.section`
  padding: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
`;
