import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from '../../styles/DashboardSidebar.module.css';
import styled from 'styled-components';
import { useState } from 'react';

const Wraps = styled.div`
  max-width: 265px;
  margin: 0 auto;
  flex-basis: 26%;
  margin-right: 30px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  max-height: 900px;

  background-color: white;
  font-family: 'Open Sans', sans-serif !important;
`;

const Profilepic = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const PersonDetails = styled.div`
  box-sizing: border-box;
  background-color: #e62e04;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 19.2px;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

function DashboardSidebar() {

  // const pathName = window.location.pathname;


  const [show, setShow] = useState(false);

 const showAuctionTypesHandler = () => {
    setShow(!show);
  };
  const showAffiliateTypesHandler = () => {
    setShow(!show);
  };
 

  return (
    <Wraps>
      <PersonDetails>
        <Profilepic
          src="https://tulikettu.me/wp-content/uploads/2022/03/TK-temp20-1080x1080-1.jpg"
          alt="person's page"
        />
        <h3
          style={{
            fontSize: '20px',
            color: 'white',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Paul K. Jensen
        </h3>
        <p
          style={{
            fontSize: '12px',
            opacity: '0.6',
            marginBottom: '10px',
          }}
        >
          208-295-8053
        </p>
      </PersonDetails>
      <ul className={classes.LinkList}>
        <li className={classes.ListItem}>
          <Link to="dashboard" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Dashboard</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="purchase-history" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Purchase history</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="download" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Download</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="sent-refund" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Sent refund Request</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="wishlist" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Wishlist</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="compare" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Compare</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="classified-products" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Classified Products</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <div onClick={showAuctionTypesHandler}>
            <div to="auction-bidded" className={classes.Link}>
              <div className={classes.Icon}>
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <div className={classes.LinkName}>Auction</div>
            </div>
            <ul
              className={classes.Subs}
              style={show ? { height: 'auto' } : null}
            >
              <li className={classes.ListItem}>
                <Link to="auction-bidded/bidded-product" className={classes.Link}>
                  <div className={classes.Icon}>
                    <div className={classes.ListStyle}></div>{' '}
                  </div>
                  <div className={classes.LinkName}>Bidded Products</div>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link to="auction-bidded/purchase-history" className={classes.Link}>
                  <div className={classes.Icon}>
                    <div className={classes.ListStyle}></div>{' '}
                  </div>
                  <div className={classes.LinkName}>Purchase History</div>
                </Link>
              </li>
              </ul>
          </div>
        </li>
        <li className={classes.ListItem}>
          <Link to="conversation" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Conversations</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="wallet" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>My Wallet</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="earning-point" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Earning Points</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <div onClick={showAffiliateTypesHandler}>
            <div to="affiliate" className={classes.Link}>
              <div className={classes.Icon}>
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <div className={classes.LinkName}>Affliate</div>
            </div>
            <ul
              className={classes.Subs}
              style={show ? { height: 'auto' } : null}
            >
              <li className={classes.ListItem}>
                <Link to="affiliate/system" className={classes.Link}>
                  <div className={classes.Icon}>
                    <div className={classes.ListStyle}></div>{' '}
                  </div>
                  <div className={classes.LinkName}>Affiliate System</div>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link to="affiliate/payment-history" className={classes.Link}>
                  <div className={classes.Icon}>
                    <div className={classes.ListStyle}></div>{' '}
                  </div>
                  <div className={classes.LinkName}>Payment History</div>
                </Link>
              </li>

              <li className={classes.ListItem}>
                <Link
                  to="affiliate/withdrawal-history"
                  className={classes.Link}
                >
                  <div className={classes.Icon}>
                    <div className={classes.ListStyle}></div>{' '}
                  </div>
                  <div className={classes.LinkName}>
                    Withdrawal Request History
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={classes.ListItem}>
          <Link to="support" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Support Ticket</div>
          </Link>
        </li>
        <li className={classes.ListItem}>
          <Link to="manage-profile" className={classes.Link}>
            <div className={classes.Icon}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={classes.LinkName}>Manage Profile</div>
          </Link>
        </li>
      </ul>
      {/* <Container>
        <Content>
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
          <div style={{ marginBottom: '3%' }}>
            <Nav to="/user/dashboard">Dashboard</Nav>
          </div>
        </Content>
        <Content>
          {' '}
          <RequestPageIcon />
          <Nav to="/user/purchase-history">Purchase History</Nav>
        </Content>
        <Content>
          <DownloadIcon />
          <Nav to="/user/download">Download</Nav>
        </Content>
        <Content>
          <FastRewindIcon />
          <Nav to="/user/sent-refund">Sent Refund Request</Nav>
        </Content>
        <Content>
          <FavoriteBorderIcon />
          <Nav to="/user/wishlist">Wishlist</Nav>
        </Content>
        <Content>
          <AutorenewIcon />
          <Nav to="/user/compare">Compare</Nav>
        </Content>
        <Content>
          <DiamondIcon />
          <Nav to="/user/classified-products">Classified Products</Nav>
        </Content>
        <Content>
          <GavelIcon />
          <Nav to="/user/auction-bidded">Auction</Nav>
        </Content>
        <Content>
          <ChatIcon />
          <Nav to="/user/conversation">Conversations</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/wallet">My Wallet</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/earning-point">Earning Points</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/affliate">Affliate</Nav>
        </Content>
        <Content>
          <SupportIcon />
          <Nav to="/user/support">Support Ticket</Nav>
        </Content>
        <Content>
          <PersonIcon />
          <Nav to="/user/manageprofile">Manage Profile</Nav>
        </Content>
      </Container> */}
    </Wraps>
  );
}

export default DashboardSidebar;
