import classes from '../../styles/affiliate.module.css';
import React from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../../pages/user/components/Box';

const Box2 = styled.div`
  background-color: white;
  width: 15vw;
  flex: 30%;
  height: 20vh;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 0.3rem!important;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%) !important;
`
const Second = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-Content: center;
`;
const Card = styled.div`
  height: 5vh;
   padding: 40px; 
`;

const Upload = styled.div`
  margin-top: 20px;
   color: red;
`;

const SupportTicket = () => {
  const Ticket = [
    {
      ticketID: '#1000002513',
      sendingDate: '2022-04-28 03:07:13',
      subject: 'A doloribus aut quae',
      status: 'open',
      options: 'view details'
    },
    {
      ticketID: '#10000024',
      sendingDate: '2021-02-14 07:24:33',
      subject: 'Cupiditate qui aut p',
      status: 'pending',
      options: 'view details'
    },
  ];
  const headers = ['#', 'Date', 'Amount', 'Status'];
  return (
    <div style ={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: "20px"}}>
      <div> Support Ticket</div>
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

      <div className={classes.PaymentContent} style={{ borderRadius: '10px' }}>
        <div className={classes.PaymentHistoryBox}>
          <div
            className={[classes.PaymentHistoryBoxHead, classes.StatsHead].join(
              ' '
            )}
          >
            Tickets
          </div>
        </div>
        <div style={{ padding: '0px 20px' }}>
          <Box state={Ticket} headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
