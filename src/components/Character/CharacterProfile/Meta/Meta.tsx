import React from "react"
import { CharacterObjectInterface } from "../../../../types/character/character"
import {
  MetaDataText,
  MetaHeader,
  MetaItemWrapper,
  MetaSection,
} from "../styled"

type MetaItemProps = {
  item: string
  text: string | string[] | undefined
}

const MetaItem: React.FC<MetaItemProps> = ({ item, text }) => {
  return (
    <MetaItemWrapper>
      <MetaHeader>{item}:</MetaHeader>
      <MetaDataText>{text}</MetaDataText>
    </MetaItemWrapper>
  )
}

const Meta = ({ character }: { character: CharacterObjectInterface }) => {
  const meta = [
    {
      item: "Full Name",
      text: character.fields["Full Name"] || character.fields["Name"],
    },
    {
      item: "Age",
      text: character.fields.Age.toString(),
    },
    {
      item: "Tribe",
      text: character.fields["Name (from Tribe)"],
    },
    {
      item: "Species",
      text: character.fields["Name (from Species)"]?.join(", "),
    },
    {
      item: "Title/Nickname",
      text: character.fields["Title/Nickname"] || "N/A",
    },
  ]

  return (
    <MetaSection>
      {meta
        ? meta.map((x, i) => <MetaItem key={i} item={x.item} text={x.text} />)
        : null}
    </MetaSection>
  )
}

export default Meta
