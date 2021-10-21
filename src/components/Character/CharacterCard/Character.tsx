import React from "react";
import { CharacterInterface } from "../../../hooks/useCharacters";
import { Card, CardHeader, CharacterName, Thumbnail } from "./styled";

type CharacterProps = {
  character: CharacterInterface;
  index: number;
};

const Character: React.FC<CharacterProps> = ({ character, index }) => {
  return (
    <Card key={index} onClick={() => console.log(character)}>
      <CardHeader>
        <CharacterName>{character.Name}</CharacterName>
        <p>Tribe: {character["Name (from Tribe)"]}</p>
        <p>Species: {character["Name (from Species)"]}</p>
      </CardHeader>
      <Thumbnail src={character["Inspirational images"]?.[0].url} alt="" />
    </Card>
  );
};
export default Character;
