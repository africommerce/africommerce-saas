import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 7rem;
`;

const Wraps = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 3rem;
`;

const Container = styled.div`
  display: flex;
  height: 30vh;
  position: relative;
  top: 0;
  margin: 0 auto;
  background: rgb(242, 243, 248);
`;

const Card = styled.div`
  padding: 5rem;
  box-sizing: border-box;
  background-color: #00ff66;
  margin-left: 1rem;
`;

const Card2 = styled.div`
  /* padding: 2rem; */
  border-bottom: 1px solid #ebedf2;
  box-sizing: border-box;
  background-color: #fff;
  margin-left: 1rem;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #0abb75;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 0.875rem;
`;
const Case = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cases = styled.div`
  padding: 0 3rem;
`;
const Base = styled.div`
  font-family: 'Open Sans', sans-serif !important;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  color: rgb(27, 27, 40);
`;

function Dashboard() {
  return (
    <Wrap>
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <div>
          <div style={{ padding: '3rem' }}>Dashboard</div>
          <Wraps>
            <Card>
              <h4>0 product</h4>
              <p>in your cart</p>
            </Card>
            <Card>
              <h4>8 products</h4>
              <p>in your wishlist</p>
            </Card>
            <Card>
              <h4>96 products</h4>
              <p>you ordered</p>
            </Card>
          </Wraps>
        </div>
        <Cases>
          <Case>
            <Card2>
              <div style={{ borderBottom: '1px solid #ebedf2' }}>
                <h5
                  style={{
                    fontWeight: '500',
                    lineHeight: '1.2',
                    padding: '1rem',
                  }}
                >
                  Default Shipping Address
                </h5>
              </div>
              <Base style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <p style={{ padding: '0 1rem' }}>
                  Address: 3947 West Side Avenue Hackensack, NJ 07601
                </p>
                <p style={{ padding: '0 1rem' }}>Country: United States</p>
                <p style={{ padding: '0 1rem' }}>State: Alaska</p>
                <p style={{ padding: '0 1rem' }}>City: College</p>
                <p style={{ padding: '0 1rem' }}>Postal Code: 1254</p>
                <p style={{ padding: '0 1rem' }}>Phone: 201-287-7714</p>
              </Base>
            </Card2>
            <Card2>
              <div style={{ borderBottom: '1px solid #ebedf2' }}>
                <h5
                  style={{
                    fontWeight: '500',
                    lineHeight: '1.2',
                    padding: '1rem',
                  }}
                >
                  Purchased Package
                </h5>
              </div>
              <Base>
                <img src="" />
                <p style={{ padding: '0 1rem' }}>Product Upload: 300times</p>
                <p style={{ padding: '0 1rem' }}>
                  Product Upload Remaining: 594 times
                </p>
                <h5
                  style={{ padding: '0 1rem', color: 'red', fontWeight: '800' }}
                >
                  Current Package: Premium
                </h5>
                <p style={{ padding: '0 1rem' }}>
                  <Button>Upgrade Package</Button>
                </p>
              </Base>
            </Card2>
          </Case>
        </Cases>
      </div>
    </Wrap>
  );
}

export default Dashboard;
