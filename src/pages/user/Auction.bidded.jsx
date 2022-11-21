import React, { useEffect, useState } from 'react';
import classes from '../../styles/purchase.module.css';

const AuctionBidded = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  const data = [
    {
      id: 1,
      Product: 'Bridesmaid Jewelry Sets for Women',
      BiddedAmount: '$550.000',
      HighestBiddedAmount: '$550.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 2,
      Product: 'Dell 8300 Desktop 2020',
      BiddedAmount: '$2,020.000',
      HighestBiddedAmount: '$3,000.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 3,
      Product: 'OnePlus 8T 5G KB2000 128GB 8GB RAM',
      BiddedAmount: '$4,050.000',
      HighestBiddedAmount: '$4,050.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 4,
      Product: '2020Bmw R 1250 RS',
      BiddedAmount: '$2,040.000',
      HighestBiddedAmount: '$2,050.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 5,
      Product: '2021 BMW i8 Car',
      BiddedAmount: '$5,020.000',
      HighestBiddedAmount: '$5,020.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 6,
      Product: 'OnePlus 7 pro (256GB storage)',
      BiddedAmount: '$850.000',
      HighestBiddedAmount: '$850.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
    {
      id: 7,
      Product: 'iPhone 12 Pro Max 5G 256GB',
      BiddedAmount: '$1,250.000',
      HighestBiddedAmount: '$13,000.000',
      AuctionEndDate: '2025-03-01 00:00:00',

      Action: ['N/A', 'Purchased'],
    },
  ];

  useEffect(() => {
    setState(data);
    setLoading(false);
  }, []);

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
        {data.map((data) => {
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
      </div>
    );
  }
  return content;
};

export default AuctionBidded;
