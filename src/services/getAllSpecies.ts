import { API_URLS } from "@/config/api";

export const getAllSpecies = async (numberPage = 1) => {
  const speciesSet = new Set<string>();
  try {
    const res = await fetch(`${API_URLS.getAllCharacters}?page=${numberPage}`);
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    data.results.forEach((character: { species: string }) => {
      speciesSet.add(character.species);
    });
    return Array.from(speciesSet);
  } catch (error) {
    console.log('Error fetching species:', error);
    return [];
  }
}