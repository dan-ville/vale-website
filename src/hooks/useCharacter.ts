import { useEffect, useState } from "react"
import getCharacter from "../helpers/characters/getCharacter"
import { CharacterObjectInterface } from "../types/character/character"

const useCharacter = (id: string) => {
  const [character, setCharacter] = useState<CharacterObjectInterface | any>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCharacter(id).then((res) => {
      setCharacter(res)
      setIsLoading(false)
    })
  }, [id])

  return { character, isLoading }
}

export default useCharacter
