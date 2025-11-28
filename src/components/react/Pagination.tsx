import { useState, useEffect } from "react";
import { getNumberPagination } from "@/services/getNumberPagination";
import "@styles/pagination.css";
import "@styles/buttons.css";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}
const ArrowIcon = (moreClass: string) => (
  <svg
    className={moreClass}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M19 9l-7 7-7-7"></path>
  </svg>
)
export default function Pagination({
  currentPage: initialPage = 1,
  totalPages: initialTotalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages || 1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      const pages = await getNumberPagination();
      setTotalPages(pages.length);
    };
    
    if (!initialTotalPages) {
      fetchTotalPages();
    }
  }, [initialTotalPages]);

  const handlePageChange = (newPage: number) => {
    if (isAnimating || newPage === currentPage || newPage < 1 || newPage > totalPages) return;

    setIsAnimating(true);
    setCurrentPage(newPage);
    onPageChange?.(newPage);

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handlePrevClick = () => {
    if (currentPage > 1 && !isAnimating) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages && !isAnimating) {
      handlePageChange(currentPage + 1);
    }
  };

  // Crear array con todos los números de página
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const itemWidth = 60; // ancho del elemento + gap
  const elementWidth = 50; // ancho solo del elemento
  const viewportCenter = 85; // centro del viewport (170 / 2)
  const elementCenter = elementWidth / 2; // centro del elemento (25px)
  
  const offset = viewportCenter - ((currentPage - 1) * itemWidth + elementCenter);

  return (
    <div className="w-full max-w-xl mx-auto p-4 flex justify-center">
      <nav
        className="flex items-center justify-center gap-6"
        aria-label="Paginación"
      >
        {/* Botón Anterior */}
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className="btn-primary"
          style={{padding: '8px'}}
        >
          <div className="block rotate-90">
            {ArrowIcon("w-4 h-4")}
          </div>
        </button>

        {/* Contenedor de Números con Overflow */}
        <div className="pagination-viewport">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-15 aspect-square bg-primary/10 border-2 border-primary/50 rounded-lg pointer-events-none"></div>
          <div
            className="pagination-slider"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {allPages.map((pageNum) => {
              const isCurrent = pageNum === currentPage;

              return (
                <div
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`page-number-slide ${isCurrent ? "current" : "inactive"}`}
                >
                  {pageNum}
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          aria-label="Página siguiente"
          className="btn-primary"
          style={{padding: '8px'}}
        >
          <div className="block -rotate-90">
            {ArrowIcon("w-4 h-4")}
          </div>
        </button>
      </nav>
    </div>
  );
}
