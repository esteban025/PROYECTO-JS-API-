import { getAllCharactersCards } from "@/services/getAllPersonajes";

export const species = async (): Promise<string[]> => {
  const characters = await getAllCharactersCards();
  const speciesSet = new Set<string>();

  characters.forEach((character) => {
    if (character.species) speciesSet.add(character.species);
  });
  
  return Array.from(speciesSet);
}