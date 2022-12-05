import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import WhiteBox from './components/whiteBox';
import PurpleBox from './components/whiteBox';
import classes from '../../styles/users.module.css';

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex: 1;
`;

const ClassifiedProduct = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  const data = [
    {
      id: 1,
      Name: 'Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band',
      Price: '$120.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
    },
    {
      id: 2,
      Name: 'Canon Pixma TS3320 Black, Works with Alexa',
      Price: '$80.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
    },
    {
      id: 3,
      Name: 'Mi Smart Router 4C, 300 Mbps with 4 high-Performance Antenna & App Control',
      Price: '$30.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
    },
    {
      id: 4,
      Name: 'Sony HT-S20R 5.1ch Dolby Digital Soundbar',
      Price: '$90.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
    },
    {
      id: 5,
      Name: 'Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL',
      Price: '$320.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
    },
    {
      id: 6,
      Name: 'Canon EOS 1500D/Rebel T7 DSLR Camera with EF-S 18-55 mm f/3.5-5.6 is II Lens',
      Price: '$52.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      options: [ 'create-outline', 'trash' ]
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
      <Box>
      <div className={classes.SystemBoxes}>
        <PurpleBox caption="Affiliate Balance" value="$10, 000" symbol="$" />

        <WhiteBox caption="Configure Payout" icon="Settings" />
        <WhiteBox
          caption="Withdrawal Request"
          icon="Plus"
        />
      </div>
      <Containers>
        <div className={classes.Purchase}>
          <h2>All Products</h2>
          <div className={classes.Headers}>
            <div>#</div>
            <div>Name</div>

            <div>Price</div>
            <div id="display">Available Status</div>
            <div>Admin Status</div>
            <div>Options</div>
          </div>
          {state.map((data) => {
            return (
              <div key={data.id} className={classes.PurchaseBox}>
                <div className={classes.AuctionId}>{data.id}</div>
                <div className={classes.Code}>{data.Name}</div>

                <div className={classes.BiddedAmount}>${data.Price}</div>

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
                <div className={classes.Btn}><button
                      style={{
                        backgroundColor: '#0abb75',
                        color: 'white',
                        padding: '1px 4px',
                        borderRadius: '3px',
                        border: '0',
                        fontSize: '11px',
                      }}
                    >
                      {data.AdminStatus}
                    </button></div>
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
      </Containers>
      </Box>
    );
  }
  return content;
};

export default ClassifiedProduct;
