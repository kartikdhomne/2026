import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const pages = [];

  const totalPages = 20;

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  pages.push(1);

  if (start > 2) {
    pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((item, index) => {
        return item === "..." ? (
          <span key={index} style={{ margin: 4 }}>
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            style={{
              margin: 4,
              fontWeight: item === currentPage ? "bold" : "normal",
            }}
          >
            {item}
          </button>
        );
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
