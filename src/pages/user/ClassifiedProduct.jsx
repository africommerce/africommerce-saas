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

const Box1 = styled.div`
  background-image: linear-gradient(315deg, #eb4786 0%, #b854a6 74%);
  background-color: #eb4786;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%) !important;
  width: 15vw;
  flex: 30%;
  height: 20vh;
  margin-right: 20px;
  overflow: hidden;
  color: white;
  border-radius: '0.3rem!important';
`;

const First = styled.div`
  padding: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: 'center';
`;

const Box2 = styled.div`
  background-color: white;
  width: 15vw;
  flex: 30%;
  height: 20vh;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 0.3rem !important;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%) !important;
`;

const Box3 = styled.div`
  width: 15vw;
  flex: 30%;
  height: 20vh;
  background-color: white;
  overflow: hidden;
  border-radius: 0.3rem !important;
`;

const Uploads = styled.div`
  font-weight: bold;
  font-size: 24px;
  font-family: 'Open Sans';
  font-weight: 700;
  line-height: 28.8px;
  color: rgb(255, 255, 255);
`;
const Second = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Card = styled.div`
  height: 5vh;
  padding: 40px;
`;
const Third = styled.div`
  align-items: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Upload = styled.div`
  margin-top: 20px;
  color: red;
`;

const Image = styled.img`
  width: 70px;
  height: 60px;
`;

const Detail = styled.div`
  color: red;
  margin-bottom: 6px;
`;

const Button = styled.button`
  color: red;
  border: 0.1pc solid red;
  padding: 5px;
  background-color: white;
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
          <Box1>
            <First>
              <IoArrowUp size={36} color="white" />
              <Uploads>594</Uploads>
              <div>Remaining uploads</div>
            </First>
          </Box1>

          <Box2>
            <Second>
              <Card>
                <NavLink to="customers_products">
                  <IoAddCircle size={100} color="#8f97ab" marginBotton="0" />
                </NavLink>
              </Card>
              <Upload>Add New product</Upload>
            </Second>
          </Box2>

          <Box3>
            <Third>
              <Image src="https://demo.activeitzone.com/ecommerce/public/uploads/all/zu3eVLzwf8iAs4AG7K5h4902UhaXVR0MbWVevxjJ.png" />
              <Detail>CurrentPackage: Premiu</Detail>
              <div>
                <Button>Upgrade Package</Button>
              </div>
            </Third>
          </Box3>
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
                      <div
                        style={
                          status
                            ? {
                                backgroundColor: 'black',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                transition: 'all 3s',
                                transform: 'translateX (3rem)',
                              }
                            : {
                                backgroundColor: 'black',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                transition: 'all .3s',
                                transform: 'translateX(0)',
                              }
                        }
                      ></div>
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
