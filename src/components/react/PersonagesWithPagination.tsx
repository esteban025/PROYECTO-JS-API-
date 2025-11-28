import { useState } from "react";
import PersonagesGrid from "./PersonagesGrid";
import Pagination from "./Pagination";

export default function PersonagesWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba cuando cambie la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PersonagesGrid currentPage={currentPage} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
