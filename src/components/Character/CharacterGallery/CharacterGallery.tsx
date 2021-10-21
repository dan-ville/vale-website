import useCharacters, {
  CharacterInterface,
} from "../../../hooks/useCharacters";
import Character from "../CharacterCard/Character";
import { GalleryGrid } from "./styled";

const CharacterGallery = () => {
  const [characters, isLoading] = useCharacters();

  if (isLoading) return <></>;
  return (
    <GalleryGrid>
      {characters
        ? characters.map((character: CharacterInterface, index: number) => (
            <Character character={character} key={index} />
          ))
        : null}
    </GalleryGrid>
  );
};

export default CharacterGallery;
