// All components for this page are to be created in components/user folder
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
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
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fff;
  margin-left: 1rem;
`;
const Case = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cases = styled.div`
  padding: 0 3rem;
  `

function Dashboard() {
  return (
    <Wrap>
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <div>
          <div>Dashboard</div>
          <Wrap>
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
          </Wrap>
        </div>
        <Cases>
          <Case>
            <Card2>
              <div>Default Shipping Address</div>
              <div>
                <p>Address: 3947 West Side Avenue Hackensack, NJ 07601</p>
                <p>Country: United States</p>
                <p>State: Alaska</p>
                <p>City: College</p>
                <p>Postal Code: 1254</p>
                <p>Phone: 201-287-7714</p>
              </div>
            </Card2>
            <Card2>
              <div>Purchased Package</div>
              <div>
                <img src="" />
                <p>Product Upload: 300times</p>
                <p>Product Upload Remaining: 594 times</p>
                <h5>Current Package: Premium</h5>
                <button>Upgrade Package</button>
              </div>
            </Card2>
          </Case>
        </Cases>
      </div>
    </Wrap>
  );
}

export default Dashboard;
