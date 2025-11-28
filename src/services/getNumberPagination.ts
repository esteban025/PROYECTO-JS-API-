export const getNumberPagination = async () => {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return Array.from({ length: data.info.pages }, (_, i) => i + 1);
  } catch (error) {
    console.log('Error fetching pagination numbers:', error);
    return [];
  }
}