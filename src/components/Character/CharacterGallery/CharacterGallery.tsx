import useCharacters, {
  CharacterObjectInterface,
} from "../../../hooks/useCharacters";
import LoadingGif from "../../LoadingGif/LoadingGif";
import Character from "../CharacterCard/Character";
import { GalleryGrid } from "./styled";

const CharacterGallery = () => {
  const [characters, isLoading] = useCharacters();

  if (isLoading) return <LoadingGif />;
  return (
    <GalleryGrid>
      {characters
        ? characters.map(
            (character: CharacterObjectInterface, index: number) => (
              <Character character={character} index={index} />
            )
          )
        : null}
    </GalleryGrid>
  );
};

export default CharacterGallery;
