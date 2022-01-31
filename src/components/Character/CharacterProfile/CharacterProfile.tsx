import React from "react"
import { useParams } from "react-router"
import useCharacter from "../../../hooks/useCharacter"
import Loading from "../../Loading/Loading"
import CharacterView from "./CharacterProfie.View"

type Params = {
  id: string
}
const CharacterProfile: React.FC = () => {
  const { id } = useParams<Params>()
  const { character, isLoading } = useCharacter(id)

  if (isLoading) return <Loading />

  return <CharacterView character={character} />
}

export default CharacterProfile
