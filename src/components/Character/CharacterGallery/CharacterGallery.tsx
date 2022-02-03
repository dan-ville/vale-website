import React, { useEffect, useState } from "react"
import useCharacters from "../../../hooks/useCharacters"
import { PageWrapper } from "../../../pageStyles"
import { CharacterObjectInterface } from "../../../types/character/character"
import sortAlphabetically from "../../../utils/sortAlphabetically"
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


  const sortNames = (
    a: CharacterObjectInterface,
    b: CharacterObjectInterface
  ) => sortAlphabetically(a.fields.Name, b.fields.Name)

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
    <PageWrapper>
      <Filters
        characters={characters}
        setFilters={setFilters}
        tribes={tribes}
      />
      <GalleryGrid>
        {filteredCharacters
          ? filteredCharacters
              .sort(sortNames)
              .map((character: CharacterObjectInterface, index: number) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  index={index}
                />
              ))
          : null}
      </GalleryGrid>
    </PageWrapper>
  )
}

export default CharacterGallery
