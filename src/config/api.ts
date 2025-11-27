export const API_CONFIG = {
  BASE_URL: 'https://rickandmortyapi.com/api',
  ENDPOINTS: {
    CHARACTERS: '/character',
    LOCATIONS: '/location',
    EPISODES: '/episode'
  }
}

// URLs completas para facilitar el uso
export const API_URLS = {
  getAllCharacters: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHARACTERS}`,
  getCharacter: (id: number) => `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHARACTERS}/${id}`,
  searchCharacters: (name: string) => `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHARACTERS}?name=${name}`,
  getAllLocations: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOCATIONS}`,
  getAllEpisodes: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.EPISODES}`
}
