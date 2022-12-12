import React, { useEffect, useState } from 'react';
import classes from '../../../styles/users.module.css';
import styled from 'styled-components';

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex: 1;
`;

const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 10.4px;
  font-weight: 500;
  line-height: 15.6px;
  color: rgb(255, 255, 255);
  background: green;
  color: white;
  border: none;
  padding: 2px;
  border-radius: 2px;
  align-items: center;
`;

const BiddedProduct = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  const data = [
    {
      id: 1,
      Product: 'Bridesmaid Jewelry Sets for Women',
      BiddedAmount: '$550.000',
      HighestBiddedAmount: '$550.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'green',
      Action: 'N/A',
    },
    {
      id: 2,
      Product: 'Dell 8300 Desktop 2020',
      BiddedAmount: '$2,020.000',
      HighestBiddedAmount: '$3,000.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'red',
      Action: 'Purchased',
    },
    {
      id: 3,
      Product: 'OnePlus 8T 5G KB2000 128GB 8GB RAM',
      BiddedAmount: '$4,050.000',
      HighestBiddedAmount: '$4,050.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'green',
      Action: 'N/A',
    },
    {
      id: 4,
      Product: '2020Bmw R 1250 RS',
      BiddedAmount: '$2,040.000',
      HighestBiddedAmount: '$2,050.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'red',
      Action: 'N/A',
    },
    {
      id: 5,
      Product: '2021 BMW i8 Car',
      BiddedAmount: '$5,020.000',
      HighestBiddedAmount: '$5,020.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'green',

      Action: 'Purchased',
    },
    {
      id: 6,
      Product: 'OnePlus 7 pro (256GB storage)',
      BiddedAmount: '$850.000',
      HighestBiddedAmount: '$850.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'green',

      Action: 'Purchased',
    },
    {
      id: 7,
      Product: 'iPhone 12 Pro Max 5G 256GB',
      BiddedAmount: '$1,250.000',
      HighestBiddedAmount: '$13,000.000',
      AuctionEndDate: '2025-03-01 00:00:00',
      status: 'red',

      Action: 'N/A',
    },
  ];

  useEffect(() => {
    setState(data);
    setLoading(false);
  }, [setState, setLoading]);

  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading) {
    content = (
      <Containers>
        <div className={classes.Purchase}>
          <h2>Bidded Products</h2>
          <div className={classes.Headers}>
            <div>#</div>
            <div>Product Name</div>

            <div>My Bidded Amount</div>
            <div id="display">Highest Bid Amount</div>
            <div>Auction End Date</div>
            <div>Action</div>
          </div>
          {state.map((data) => {
            return (
              <div key={data.id} className={classes.PurchaseBox}>
                <div className={classes.AuctionId}>{data.id}</div>
                <div className={classes.Code}>{data.Product}</div>

                <div className={classes.BiddedAmount}>${data.BiddedAmount}</div>

                <div className={classes.Btn}>
                  {data.status === 'red' ? (
                    <button
                      style={{
                        backgroundColor: '#0abb75',
                        color: 'white',
                        padding: '1px 4px',
                        borderRadius: '3px',
                        border: '0',
                        fontSize: '11px',
                      }}
                    >
                      {data.HighestBiddedAmount}
                    </button>
                  ) : (
                    <button
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '1px 4px',
                        borderRadius: '3px',
                        border: '0',
                        fontSize: '11px',
                      }}
                    >
                      {data.HighestBiddedAmount}
                    </button>
                  )}
                </div>
                <div className={classes.Date}>{data.AuctionEndDate}</div>
                <div className={classes.Btn}>
                  {data.Action === 'Purchased' ? (
                    <button
                      style={{
                        backgroundColor: '#0abb75',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        border: '0',
                      }}
                    >
                      {data.Action}
                    </button>
                  ) : (
                    <div style={{ color: 'black' }}>{data.Action}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Containers>
    );
  }
  return content;
};

export default BiddedProduct;
