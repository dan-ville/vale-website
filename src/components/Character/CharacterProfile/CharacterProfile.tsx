import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCharacters, {
  CharacterObjectInterface,
} from "../../../hooks/useCharacters";
import Loading from "../../Loading/Loading";
import CharacterView from "./CharacterProfie.View";

type Params = {
  id: string;
};
const CharacterProfile: React.FC = () => {
  const [character, setCharacter] = useState<CharacterObjectInterface>();
  const { id: paramId } = useParams<Params>();
  const [characters, isLoading] = useCharacters();

  useEffect(() => {
    const characterTarget = characters.filter(
      (character: CharacterObjectInterface) => paramId === character.id
    )[0];
    setCharacter(characterTarget);
  }, [characters, paramId]);

  if (isLoading) return <Loading />;

  return (
    <>{character ? <CharacterView character={character} /> : <Loading />}</>
  );
};

export default CharacterProfile;
