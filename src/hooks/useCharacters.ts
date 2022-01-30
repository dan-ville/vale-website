import { useEffect, useState } from "react";
import getCharacters from "../helpers/characters/getCharacters";

export interface CharacterFieldsInterface {
  Name: string;
  "Inspirational images"?: Array<any>;
  Scenes?: Array<string>;
  Factions?: Array<string>;
  Type?: string;
  Tagline?: string;
  Biography?: string;
  "Character Building"?: string;
  "Eye Color"?: string;
  "Hair Color"?: string;
  "Skin Color"?: string;
  "Personality Keywords"?: string;
  Species?: Array<string>;
  Tribe?: Array<string>;
  "Full Name"?: string;
  Age: number;
  "Title/Nickname"?: string;
  "Name (from Tribe)"?: Array<string>;
  "Name (from Species)"?: Array<string>;
}
export interface CharacterObjectInterface {
  createdTime: string;
  fields: CharacterFieldsInterface;
  id: string;
}

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
