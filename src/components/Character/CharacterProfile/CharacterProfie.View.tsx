import { CharacterObjectInterface } from "../../../types/character/character";
import Loading from "../../Loading/Loading";
import {
  Profile,
  Header,
  Section,
  SectionHeader,
  CharacterName,
  ProfilePic,
  MetaSection,
  MetaHeader,
  MetaDataText,
  MetaItemWrapper,
} from "./styled";

type CharacterProfileProps = {
  character: CharacterObjectInterface;
};

const CharacterView: React.FC<CharacterProfileProps> = ({ character }) => {
  const meta = [
    {
      item: "Full Name",
      text: character.fields["Full Name"],
    },
    {
      item: "Age",
      text: character.fields.Age.toString(),
    },
    {
      item: "Tribe",
      text: character.fields["Name (from Tribe)"],
    },
    {
      item: "Species",
      text: character.fields["Name (from Species)"]?.join(", "),
    },
    {
      item: "Title/Nickname",
      text: character.fields["Title/Nickname"] || "N/A",
    },
  ]

  if (!character) return <Loading />;

  return (
    <Profile>
      <Header>
        <CharacterName>{character.fields.Name}</CharacterName>
      </Header>
      <Section>
        <ProfilePic src={character.fields["Inspirational images"]?.[0].url} />
        <MetaSection>
          {meta
            ? meta.map((x, i) => (
                <MetaItem key={i} item={x.item} text={x.text} />
              ))
            : null}
        </MetaSection>
      </Section>
      <br />
      <Header>
        <SectionHeader>Biography</SectionHeader>
      </Header>
      <Section>
        <MetaSection>
          <MetaDataText>{character.fields.Biography}</MetaDataText>
        </MetaSection>
      </Section>
    </Profile>
  );
};

type MetaItemProps = { item: string; text: string | string[] | undefined };
const MetaItem: React.FC<MetaItemProps> = ({ item, text }) => {
  return (
    <MetaItemWrapper>
      <MetaHeader>{item}:</MetaHeader>
      <MetaDataText>{text}</MetaDataText>
    </MetaItemWrapper>
  );
};

export default CharacterView;
