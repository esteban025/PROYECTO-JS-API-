import { API_URLS } from "@/config/api"
import type { CharacterCard, CharacterDetails } from "@/types/types"

// Función para obtener todos los personajes con todos los datos
export const getAllCharacters = async (page: number = 1): Promise<CharacterDetails[]> => {
  try {
    const url = `${API_URLS.getAllCharacters}?page=${page}`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error("Error fetching characters:", error)
    return []
  }
}

// Función para transformar los datos completos a solo lo necesario para las cards
const transformToCardData = (characters: CharacterDetails[]): CharacterCard[] => {
  return characters.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species
  }))
}

// Función principal: hace fetch y devuelve solo los datos para las cards
export const getAllCharactersCards = async (page: number = 1): Promise<CharacterCard[]> => {
  const characters = await getAllCharacters(page)
  return transformToCardData(characters)
}