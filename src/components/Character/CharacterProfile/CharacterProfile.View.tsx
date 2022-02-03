import { PageWrapper } from "../../../pageStyles"
import { CharacterObjectInterface } from "../../../types/character/character"
import Loading from "../../Loading/Loading"
import InfoSection from "./InfoSection/InfoSection"
import Meta from "./Meta/Meta"
import {
  StyledWidth,
  Header,
  StyledMainSection,
  CharacterName,
  ProfilePic,
} from "./styled"

type CharacterProfileProps = {
  character: CharacterObjectInterface
}

const CharacterView: React.FC<CharacterProfileProps> = ({ character }) => {
  if (!character) return <Loading />

  return (
    <PageWrapper>
      <StyledWidth>
        <Header>
          <CharacterName>{character.fields.Name}</CharacterName>
        </Header>
        <StyledMainSection>
          <ProfilePic src={character.fields["Inspirational images"]?.[0].url} />
          <Meta character={character} />
        </StyledMainSection>
        <br />
        {character.fields.Biography ? (
          <InfoSection heading="Biography" text={character.fields.Biography} />
        ) : null}
      </StyledWidth>
    </PageWrapper>
  )
}

export default CharacterView
