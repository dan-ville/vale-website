import React from "react"
import { useHistory } from "react-router"
import TribalIcon from "../../../assets/icons/TribalIcon"
import { CharacterObjectInterface } from "../../../types/character/character"
import {
  Card,
  CardHeader,
  CharacterName,
  IconContainer,
  Thumbnail,
} from "./styled"

type CharacterProps = {
  character: CharacterObjectInterface
  index: number
}

const CharacterCard: React.FC<CharacterProps> = ({ character, index }) => {
  const { fields, id } = character
  const history = useHistory()
  const goToProfile = (event: React.MouseEvent): void => {
    const route = `/characters/${id}`
    history.push(`${route}`)
  }

  return (
    <Card key={index} onClick={(e) => goToProfile(e)}>
      <CardHeader>
        <IconContainer>
          <TribalIcon tribe={character?.fields?.["Name (from Tribe)"]?.[0]} />
        </IconContainer>
        <CharacterName>{fields.Name}</CharacterName>
        <p>Tribe: {fields["Name (from Tribe)"]}</p>
        <p>Species: {fields["Name (from Species)"]?.join(", ")}</p>
      </CardHeader>
      <Thumbnail src={fields["Inspirational images"]?.[0].url} alt="" />
    </Card>
  )
}
export default CharacterCard
