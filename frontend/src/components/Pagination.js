import React from "react";

function Pagination({ setLimit, total, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / setLimit); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <div onClick={() => paginate(number)} className="page-link">
                {number}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Pagination;
