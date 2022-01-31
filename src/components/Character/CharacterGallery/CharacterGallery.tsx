import React, { useEffect, useState } from "react"
import useCharacters from "../../../hooks/useCharacters"
import { CharacterObjectInterface } from "../../../types/character/character"
import Loading from "../../Loading/Loading"
import Character from "../CharacterCard/Character"
import { GalleryGrid, InputsWrapper, SearchField } from "./styled"

const CharacterGallery: React.FC = () => {
  const [characters, isLoading] = useCharacters()
  const [filteredCharacters, setFilteredCharacters] = useState(characters)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const characterMatch = characters.filter(
      (character: CharacterObjectInterface) =>
        character.fields.Name.toLowerCase().includes(value.toLocaleLowerCase())
    )
    setFilteredCharacters(characterMatch)
  }

  useEffect(() => {
    setFilteredCharacters(characters)
  }, [characters])

  const sortAlphabetically = (
    a: CharacterObjectInterface,
    b: CharacterObjectInterface
  ) => {
    if (a.fields.Name < b.fields.Name) {
      return -1
    }
    if (a.fields.Name > b.fields.Name) {
      return 1
    }
    return 0
  }

  if (isLoading) return <Loading />
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
          ? filteredCharacters
              .sort(sortAlphabetically)
              .map((character: CharacterObjectInterface, index: number) => (
                <Character
                  key={character.id}
                  character={character}
                  index={index}
                />
              ))
          : null}
      </GalleryGrid>
    </>
  )
}

export default CharacterGallery
