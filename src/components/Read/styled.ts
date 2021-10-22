import styled from "styled-components";

export const Section = styled.section`
  max-width: 900px;
  padding: 2rem 0;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const CTASection = styled.div`
  flex: 1;
  @media (max-width: 800px) {
      margin-top: 1rem;
    text-align: center;
  }
`;
export const CTAText = styled.p`
  max-width: 45ch;
  font-size: clamp(1rem, 5vw, 2rem);
`;
export const DownloadAnchor = styled.a`
  text-decoration: none;
`;
export const DownloadImage = styled.img`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  padding: 1rem 0;
`;
export const ImageSection = styled.div`
  /* margin: 0 1rem; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
