import styled from "styled-components";

export const Profile = styled.div`
  margin: 0 auto;
  padding: 1rem;
  /* display: grid; */
  width: 95%;
  max-width: 1200px;
  /* grid-template-columns: auto;
  grid-template-rows: auto 1fr 1fr; */
`;
export const Header = styled.div`
  border: 1px solid white;
  padding: 1rem;
  width: 100%;
`;
export const CharacterName = styled.h1`
  color: ${(props) => props.theme.accent};
  font-size: 3rem;
`;
export const Section = styled.div`
  width: 100%;
  border: 1px solid white;
  display: flex;    
`;
export const SectionHeader = styled.h2`
  font-size: 2.5rem;
`;
export const ProfilePic = styled.img`
  object-fit: contain;
  width: 100%;
  min-width: 200px;
  max-width: 300px;
`;
export const MetaSection = styled.div`
  padding: 1rem;
`;
export const MetaItemWrapper = styled.div`
  padding-bottom: 1rem;
`;
export const MetaHeader = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
`;
export const MetaDataText = styled.p`
  font-size: 1.25rem;
`;
