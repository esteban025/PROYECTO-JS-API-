import { API_URLS } from "../config/api"
import type { CharacterDetails } from "@/types/types"

export const getCharacterById = async (id: string): Promise<CharacterDetails | null> => {
  try {
    const res = await fetch(API_URLS.getCharacter(Number(id)))
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching character:", error)
    return null
  }
}
