import React, { useEffect, useState } from 'react';
import { IoArrowUp, IoAddCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import classes from '../../styles/users.module.css';

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex: 1;
`;

const ClassifiedProduct = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(true);
  const [state, setState] = useState([]);

  const toggleButton = () => {
    setStatus(!status);
  };

  const info = [
    {
      id: 1,
      Name: 'Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band',
      Price: '$120.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
    {
      id: 2,
      Name: 'Canon Pixma TS3320 Black, Works with Alexa',
      Price: '$80.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
    {
      id: 3,
      Name: 'Mi Smart Router 4C, 300 Mbps with 4 high-Performance Antenna & App Control',
      Price: '$30.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
    {
      id: 4,
      Name: 'Sony HT-S20R 5.1ch Dolby Digital Soundbar',
      Price: '$90.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
    {
      id: 5,
      Name: 'Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL',
      Price: '$320.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
    {
      id: 6,
      Name: 'Canon EOS 1500D/Rebel T7 DSLR Camera with EF-S 18-55 mm f/3.5-5.6 is II Lens',
      Price: '$52.000',
      AvailableStatus: '$550.000',
      AdminStatus: 'Published',
      status: 'green',
      Opts: ['create-outline', 'trash'],
    },
  ];

  useEffect(() => {
    setState(info);
    setLoading(false);
  }, []);

  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading) {
    content = (
      <div>
        <div>Products</div>
        <div
          style={{
            padding: '5px',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              backgroundImage:
                 'linear-gradient(315deg, #eb4786 0%, #b854a6 74%)',
              backgroundColor: '#eb4786',
              boxShadow: '0 1px 2px 0 rgb(0 0 0 / 5%) !important',
              width: '15vw',
              flex: '30%',
              height: '20vh',
              marginRight: '20px',
              overflow: 'hidden',
              color: 'white',
              borderRadius: '0.3rem!important',
            }}
          >
            <div style={{padding: "30px", marginRight: '30%'}}>
              <IoArrowUp size={36} color="white"/>
              <div>594</div>
              <div>Remaining uploads</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              width: '15vw',
              flex: '30%',
              height: '20vh',
              marginRight: '20px',
              overflow: 'hidden',
              borderRadius: '0.3rem!important',
              boxShadow: '0 1px 2px 0 rgb(0 0 0 / 5%) !important'
            }}
          >
            <div style={{ height: '5vh',  padding: '40px', marginRight: '30px'}}>
              <NavLink to="customers_products">
                <IoAddCircle
                  size={70}
                  vertical-align="center"
                  color="#8f97ab"
                  marginRight="60%"
                />
              </NavLink>
            </div>
            <div  style={{padding: '30px'}}>Add New product</div>
          </div>
          <div
            style={{
              width: '15vw',
              flex: '30%',
              height: '20vh',
              backgroundColor: 'white',
              overflow: 'hidden',
              borderRadius: '0.3rem!important',
            }}
          >
            <div style={{ alignItems: 'center', padding: '50px' }}>
              <img
                style={{ width:"70px", height: "60px",  marginLeft: '30%'}}
                src="https://demo.activeitzone.com/ecommerce/public/uploads/all/zu3eVLzwf8iAs4AG7K5h4902UhaXVR0MbWVevxjJ.png"
              />
              <div style={{ marginRight: '10%', color: 'red'}}>CurrentPackage: Premium</div>
              <div style={{marginRight: '10%', marginBottom: '40px', }}>
                <button style={{color: 'red', border: '0.1pc solid red', padding: '5px', backgroundColor: 'white'}}>Upgrade Package</button>
              </div>
            </div>
          </div>
        </div>
        <Containers>
          <div className={classes.Purchase}>
            <h2>All Products</h2>
            <div className={classes.Classified}>
              <div className={classes.Id}>#</div>
              <div className={classes.Name}>Name</div>

              <div className={classes.Price}>Price</div>
              <div id="display" className={classes.Status}>
                Available Status
              </div>
              <div className={classes.Admin}>Admin Status</div>
              <div className={classes.Last}>Opts</div>
            </div>
            {state.map((info) => {
              return (
                <div key={info.id} className={classes.PurchaseBox}>
                  <div className={classes.Infos}>{info.id}</div>
                  <div className={classes.Codes}>{info.Name}</div>

                  <div className={classes.Bid}>${info.Price}</div>
                  <div>
                    <div className={classes.Toggle}>
                    </div>
                  </div>

                  <div className={classes.Btns}>
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
                      {info.AdminStatus}
                    </button>
                  </div>
                  <div className={classes.Page}>
                    {info.Opts.map((option, i) => (
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
      </div>
    );
  }
  return content;
};

export default ClassifiedProduct;
