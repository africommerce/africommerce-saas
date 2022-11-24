import React from 'react';
import classes from '../../styles/users.module.css';
const Paginate = ({
  perPage,
  totalPage,
  paginate,
  curPage,
  nextPage,
  prevPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className={classes.Paginate}>
      <button className={[classes.Button].join(' ')} onClick={prevPage}>
        &lt;
      </button>

      {pageNumber.map((number, i) => {
        return (
          <button
            className={classes.Button}
            style={
              curPage === number
                ? {
                    backgroundColor: '#e62e04',
                    color: 'white',
                  }
                : null
            }
            onClick={() => paginate(number)}
            key={i}
          >
            {number}
          </button>
        );
      })}
      <button
        className={[classes.Button].join(' ')}
        onClick={() => nextPage(pageNumber.length)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginate;
