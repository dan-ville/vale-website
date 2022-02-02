import { CharacterObjectInterface } from "../../../types/character/character"
import Loading from "../../Loading/Loading"
import InfoSection from "./InfoSection/InfoSection"
import Meta from "./Meta/Meta"
import { Profile, Header, Section, CharacterName, ProfilePic } from "./styled"

type CharacterProfileProps = {
  character: CharacterObjectInterface
}

const CharacterView: React.FC<CharacterProfileProps> = ({ character }) => {
  if (!character) return <Loading />

  return (
    <Profile>
      <Header>
        <CharacterName>{character.fields.Name}</CharacterName>
      </Header>
      <Section>
        <ProfilePic src={character.fields["Inspirational images"]?.[0].url} />
        <Meta character={character} />
      </Section>
      <br />
      {character.fields.Biography ? (
        <InfoSection heading="Biography" text={character.fields.Biography} />
      ) : null}
    </Profile>
  )
}

export default CharacterView
