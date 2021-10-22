import { CharacterObjectInterface } from "../../../hooks/useCharacters";

type CharacterProfileProps = {
  character: CharacterObjectInterface;
};

const CharacterView: React.FC<CharacterProfileProps> = ({ character }) => {
  return (
    <>
      <h1>{character.fields.Name}</h1>
      <p>{character.fields["Name (from Tribe)"]}</p>
      <p>{character.fields["Name (from Species)"]}</p>
    </>
  );
};

export default CharacterView;