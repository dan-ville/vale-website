import React from "react"
import { useHistory } from "react-router"
import { CharacterObjectInterface } from "../../../types/character/character"
import { Card, CardHeader, CharacterName, Thumbnail } from "./styled"

type CharacterProps = {
  character: CharacterObjectInterface
  index: number
}

const Character: React.FC<CharacterProps> = ({ character, index }) => {
  const { fields, id } = character
  const history = useHistory()
  const goToProfile = (event: React.MouseEvent): void => {
    const route = `/characters/${id}`
    history.push(`${route}`)
  }

  return (
    <Card key={index} onClick={(e) => goToProfile(e)}>
      <CardHeader>
        <CharacterName>{fields.Name}</CharacterName>
        <p>Tribe: {fields["Name (from Tribe)"]}</p>
        <p>Species: {fields["Name (from Species)"]?.join(", ")}</p>
      </CardHeader>
      <Thumbnail src={fields["Inspirational images"]?.[0].url} alt="" />
    </Card>
  )
}
export default Character
