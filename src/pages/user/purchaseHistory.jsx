import React, { useEffect, useState } from 'react';
import classes from '../../styles/users.module.css';
import Paginate from './paginate';
const PurchaseHistory = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      id: 1,
      code: '20220605-10102737',
      date: '12-09-2022',
      status: 'Pending',

      amount: '45.00',

      options: ['trash', 'download', 'eye'],
    },
    {
      id: 2,
      code: '20220605-10102738',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 3,
      code: '20220605-10102739',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 4,
      code: '20220605-10102730',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 5,
      code: '20220605-10102740',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 6,
      code: '20220605-10102741',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 7,
      code: '20220605-10102742',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 8,
      code: '20220605-10102733',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 68,
      code: '20220605-10102738',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 67,
      code: '20220605-10102739',
      date: '12-09-2022',
      status: 'Pending',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 66,
      code: '20220605-10102730',
      date: '12-09-2022',
      status: 'Pending',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 65,
      code: '20220605-10102740',
      date: '12-09-2022',
      status: 'Pending',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 64,
      code: '20220605-10102738',
      date: '12-09-2022',
      status: 'Pending',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 63,
      code: '20220605-10102739',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 62,
      code: '20220605-10102730',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 61,
      code: '20220605-10102740',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },

    {
      id: 9,
      code: '20220605-10102744',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 90,
      code: '20220605-10102738',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 89,
      code: '20220605-10102739',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 76,
      code: '20220605-10102730',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
    {
      id: 43,
      code: '20220605-10102740',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },

    {
      id: 82,
      code: '20220605-10102745',
      date: '12-09-2022',
      status: 'Delivered',

      amount: '45.00',
      options: ['trash', 'download', 'eye'],
    },
  ];

  useEffect(() => {
    setState(data);
    setLoading(false);
  }, []);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const current = state.slice(firstIndex, lastIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = (pageNumber) => {
    if (currentPage === pageNumber) {
      setCurrentPage(1);
    } else setCurrentPage((prev) => prev + 1);
    console.log(currentPage);
  };
  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else setCurrentPage((prev) => prev - 1);
  };

  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading) {
    content = (
      <div className={classes.Purchase}>
        <h2>Purchase History</h2>
        <div className={classes.Headers}>
          <div>Code</div>
          <div>Date</div>

          <div>Amount</div>
          <div id="display">Payment Status</div>
          <div>Options</div>
        </div>
        {current.map((data) => {
          return (
            <div key={data.id} className={classes.PurchaseBox}>
              <div className={classes.Code}>{data.code}</div>
              <div className={classes.Date}>{data.date}</div>

              <div className={classes.Amount}>${data.amount}</div>

              <div className={classes.Tired}>
                {data.status === 'Delivered' ? (
                  <div className={classes[data.status]}>Paid</div>
                ) : (
                  <div className={classes[data.status]}>Unpaid</div>
                )}
              </div>
              <div className={classes.Options}>
                {data.options.map((option, i) => (
                  <span key={i} className={classes[option]}>
                    {' '}
                    <ion-icon name={option}></ion-icon>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
        <Paginate
          perPage={perPage}
          totalPage={state.length}
          paginate={paginate}
          curPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    );
  }
  return content;
};

export default PurchaseHistory;
