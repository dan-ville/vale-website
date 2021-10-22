import React from "react";
import { CharacterObjectInterface } from "../../../hooks/useCharacters";
import { Card, CardHeader, CharacterName, Thumbnail } from "./styled";

type CharacterProps = {
  character: CharacterObjectInterface;
  index: number;
};

const Character: React.FC<CharacterProps> = ({ character, index }) => {
  const { fields } = character;
  
  return (
    <Card key={index} onClick={() => console.log(character)}>
      <CardHeader>
        <CharacterName>{fields.Name}</CharacterName>
        <p>Tribe: {fields["Name (from Tribe)"]}</p>
        <p>Species: {fields["Name (from Species)"]}</p>
      </CardHeader>
      <Thumbnail src={fields["Inspirational images"]?.[0].url} alt="" />
    </Card>
  );
};
export default Character;
