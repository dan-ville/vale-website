import React, { useEffect, useState } from "react";
import useCharacters, {
  CharacterObjectInterface,
} from "../../../hooks/useCharacters";
import Loading from "../../Loading/Loading";
import Character from "../CharacterCard/Character";
import { GalleryGrid, InputsWrapper, SearchField } from "./styled";

const CharacterGallery: React.FC = () => {
  const [characters, isLoading] = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const characterMatch = characters.filter(
      (character: CharacterObjectInterface) =>
        character.fields.Name.toLowerCase().includes(value.toLocaleLowerCase())
    );
    setFilteredCharacters(characterMatch);
  };


  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  if (isLoading) return <Loading />;
  return (
    <>
      <InputsWrapper>
        <SearchField
          type="text"
          placeholder="Search by name"
          onChange={handleSearch}
        />
      </InputsWrapper>
      <GalleryGrid>
        {filteredCharacters
          ? filteredCharacters.map(
              (character: CharacterObjectInterface, index: number) => (
                <Character character={character} index={index} />
              )
            )
          : null}
      </GalleryGrid>
    </>
  );
};

export default CharacterGallery;
