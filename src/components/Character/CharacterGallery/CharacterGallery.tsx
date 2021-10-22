import React from "react";
import useCharacters, {
  CharacterObjectInterface,
} from "../../../hooks/useCharacters";
import Loading from "../../Loading/Loading";
import Character from "../CharacterCard/Character";
import { GalleryGrid } from "./styled";

const CharacterGallery: React.FC = () => {
  const [characters, isLoading] = useCharacters();

  if (isLoading) return <Loading />;
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
