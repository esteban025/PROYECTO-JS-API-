export const getNumberPagination = async () => {
  const pages = [];
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return Array.from({ length: data.info.pages }, (_, i) => i + 1);
}