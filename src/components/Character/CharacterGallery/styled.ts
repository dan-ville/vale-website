import styled from "styled-components";

export const GalleryGrid = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
`;
