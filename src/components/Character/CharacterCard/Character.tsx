import React from "react";
import { CharacterInterface } from "../../../hooks/useCharacters";
import { Card, Thumbnail } from "./styled";

type CharacterProps = {
  character: CharacterInterface;
  key: number;
};

const Character: React.FC<CharacterProps> = ({ character, key }) => {
  return (
    <Card key={key} onClick={() => console.log(character)}>
      <h2>{character.Name}</h2>
      <p>Tribe: {character["Name (from Tribe)"]}</p>
      <Thumbnail src={character["Inspirational images"]?.[0].url} alt="" />
      <p>Species: {character["Name (from Species)"]}</p>
    </Card>
  );
};
export default Character;
