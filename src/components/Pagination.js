import React from 'react';

const Pagination = ({ prevPage, nextPage, changePage, loading }) => {
  return (
    !loading && (
      <div className="center2 mb-5">
        {prevPage && (
          <button
            className="btn btn-primary mr-3"
            onClick={() => changePage(prevPage)}
          >
            Previous
          </button>
        )}
        {nextPage && (
          <button
            className="btn btn-primary"
            onClick={() => changePage(nextPage)}
          >
            Next
          </button>
        )}
      </div>
    )
  );
};

export default Pagination;
