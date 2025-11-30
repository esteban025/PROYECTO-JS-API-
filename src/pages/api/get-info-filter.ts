import type { APIRoute } from "astro";
import { getAllCharacters, getAllCharactersCards } from "@/services/getAllPersonajes";

export const GET: APIRoute = async ({ url }) => {
  // Obtener el número de página desde los parámetros de la URL
  const pageParam = url.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : 1;

  // Obtener personajes de la página específica
  const characters = await getAllCharacters(page);

  // Extraer especies únicas de esta página
  const speciesSet = new Set<string>();
  characters.forEach((character) => {
    if (character.species) {
      speciesSet.add(character.species);
    }
  });
  const species = Array.from(speciesSet).sort();

  // Extraer estados únicos de esta página
  const statusSet = new Set<string>();
  characters.forEach((character) => {
    if (character.status) {
      statusSet.add(character.status);
    }
  });
  const status = Array.from(statusSet).sort();

  // Obtener las cards de los personajes de esta página
  const charactersCards = await getAllCharactersCards(page);

  const informationPage = {
    page,
    species,
    status,
    characters: charactersCards
  };

  return new Response(
    JSON.stringify(informationPage),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};