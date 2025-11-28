import { useState, useEffect } from "react";
import { getAllCharactersCards } from "@/services/getAllPersonajes";
import type { CharacterCard } from "@/types/types";

interface PersonagesGridProps {
  currentPage: number;
}

export default function PersonagesGrid({ currentPage }: PersonagesGridProps) {
  const [characters, setCharacters] = useState<CharacterCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await getAllCharactersCards(currentPage);
      setCharacters(data);
      setNoResults(data.length === 0);
      setLoading(false);
    };

    fetchCharacters();
  }, [currentPage]);

  if (loading) {
    return (
      <section className="w-full max-w-5xl mx-auto p-4">
        <div className="text-center text-text-secondary py-8">
          <p className="text-lg">Cargando personajes...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-white">Personajes</h2>
      
      {noResults ? (
        <div className="text-center text-text-secondary py-8">
          <p className="text-lg">No se encontraron personajes 😕</p>
        </div>
      ) : (
        <section
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
        >
          {characters.map((character) => (
            <article
              key={character.id}
              className="bg-card rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <a href={`/character/${character.id}`}>
                <figure className="relative aspect-square overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                      viewTransitionName: `personage-image-${character.id}`,
                    }}
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2">
                    <p className="text-white text-sm font-medium">
                      {character.species}
                    </p>
                  </figcaption>
                </figure>
                <div className="p-4">
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{
                      viewTransitionName: `personage-name-${character.id}`,
                    }}
                  >
                    {character.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Estado: {character.status}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </section>
      )}
    </section>
  );
}
