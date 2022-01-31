import React, { useEffect, useState } from "react"
import useCharacters from "../../../hooks/useCharacters"
import { CharacterObjectInterface } from "../../../types/character/character"
import Loading from "../../Loading/Loading"
import Character from "../CharacterCard/Character"
import { GalleryGrid, InputsWrapper, SearchField, SelectField } from "./styled"

const CharacterGallery: React.FC = () => {
  const [characters, isLoading] = useCharacters()
  const [filteredCharacters, setFilteredCharacters] = useState(characters)

  const tribes = Array.from(
    new Set<string>(
      characters.map(
        (character: CharacterObjectInterface) =>
          character.fields["Name (from Tribe)"]?.[0]
      )
    )
  )

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    const characterMatches = characters.filter(
      (character: CharacterObjectInterface) =>
        character.fields.Name.toLowerCase().includes(value.toLocaleLowerCase())
    )
    setFilteredCharacters(characterMatches)
  }
  const searchByTribe = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget
    const characterMatches = characters.filter(
      (character: CharacterObjectInterface) =>
        character.fields["Name (from Tribe)"]?.[0] === value
    )
    setFilteredCharacters(characterMatches)
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
        <SelectField placeholder="Search by name" onChange={searchByTribe}>
          <option>Search by tribe</option>
          {tribes.map((tribe: string, _index: number) => (
            <option key={_index} value={tribe}>
              {tribe}
            </option>
          ))}
        </SelectField>
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
