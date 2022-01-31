import { useEffect, useState } from "react";
import getCharacters from "../helpers/characters/getCharacters";
import { CharacterObjectInterface } from "../types/character/character";

const useCharacters = () => {
  const [characters, setCharacters] = useState<
    CharacterObjectInterface[] | any
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res);
      setIsLoading(false);
    });
  }, []);

  return [characters, isLoading];
};

export default useCharacters;
