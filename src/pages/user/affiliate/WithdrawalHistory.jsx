import classes from '../../../styles/affiliate.module.css';
import PurpleBox from '../components/purpleBox';
import WhiteBox from '../components/whiteBox';
import React from 'react';
import Box from '../components/Box';
import DataBox from '../components/dataBox';
const WithdrawalHistory = () => {
  const state = [
    {
      date: '01-06-2022',
      amount: '$5.000',
      status: 'pending',
    },
    {
      date: '20-04-2022',
      amount: '$5.000',
      status: 'pending',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      status: 'approved',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      status: 'approved',
    },
  ];
  const headers = ['#', 'Date', 'Amount', 'Status'];
  return (
    <div className={classes.Payment}>
      <div className={classes.PaymentHistory}>
        <PurpleBox caption="Affiliate Balance" value="$10, 000" symbol="$" />

        <WhiteBox caption="Affiliate Withdrawal Request" icon="Settings" />
      </div>
      <DataBox state={state} headers={headers} />
    </div>
  );
};

export default WithdrawalHistory;
