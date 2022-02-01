import React, { useEffect, useState } from "react"
import useCharacters from "../../../hooks/useCharacters"
import { CharacterObjectInterface } from "../../../types/character/character"
import Loading from "../../Loading/Loading"
import CharacterCard from "../CharacterCard/CharacterCard"
import Filters from "./Filters/Filters"
import { GalleryGrid } from "./styled"

const CharacterGallery: React.FC = () => {
  const [characters, isLoading] = useCharacters()
  const [filters, setFilters] = useState({
    nameFilter: "",
    tribeFilter: "",
  })
  const [filteredCharacters, setFilteredCharacters] = useState(characters)

  useEffect(() => {
    const { nameFilter, tribeFilter } = filters
    const multiFilter = (
      data: CharacterObjectInterface[]
    ): CharacterObjectInterface[] | null => {
      const filteredData = data.filter(
        (character: CharacterObjectInterface) => {
          const name = character.fields.Name.toLowerCase()
          const tribe = character.fields["Name (from Tribe)"]?.[0]
          if (nameFilter && !name.includes(nameFilter)) return false
          if (tribeFilter && tribe !== tribeFilter) return false
          return true
        }
      )
      return filteredData
    }

    setFilteredCharacters(multiFilter(characters))
  }, [characters, filters])

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

  const tribes = Array.from(
    new Set<string>(
      characters.map(
        (character: CharacterObjectInterface) =>
          character.fields["Name (from Tribe)"]?.[0]
      )
    )
  )

  if (isLoading) return <Loading />

  return (
    <>
      <Filters
        characters={characters}
        setFilters={setFilters}
        tribes={tribes}
      />
      <GalleryGrid>
        {filteredCharacters
          ? filteredCharacters
              .sort(sortAlphabetically)
              .map((character: CharacterObjectInterface, index: number) => (
                <CharacterCard
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
