import { useEffect, useState } from "react";
import getCharacters from "./helpers/getCharacters";

export interface CharacterInterface {
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

const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterInterface[] | any>([]);
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
