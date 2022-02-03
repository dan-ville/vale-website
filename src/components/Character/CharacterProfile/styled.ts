import styled from "styled-components"

export const StyledWidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Header = styled.div`
  border: 1px solid white;
  padding: 0.5rem;
  width: 100%;
`
export const CharacterName = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
`
export const Section = styled.div`
  width: 100%;
  border: 1px solid white;
  border-top: none;
`
export const SectionHeader = styled.h3`
  font-size: 1.5rem;
`
export const ProfilePic = styled.img`
  object-fit: contain;
  width: 100%;

  @media (min-width: 600px) {
    width: 300px;
  }
`
export const StyledMainSection = styled(Section)`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
export const MetaSection = styled.div`
  padding: 1rem;
`
export const MetaItemWrapper = styled.div`
  padding-bottom: 1rem;
`
export const MetaHeader = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
`
export const MetaDataText = styled.p`
  font-size: 1.25rem;
`
