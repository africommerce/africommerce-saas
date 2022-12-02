import classes from '../../../styles/affiliate.module.css';
import PurpleBox from '../components/purpleBox';
import WhiteBox from '../components/whiteBox';
import React from 'react';
import Box from '../components/Box';
const PaymentHistory = () => {
  const state = [
    {
      date: '01-06-2022',
      amount: '$5.000',
      method: 'bank',
    },
    {
      date: '20-04-2022',
      amount: '$5.000',
      method: 'paypal',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      method: 'paypal',
    },
  ];
  const headers = ['#', 'Date', 'Amount', 'Payment Method'];
  return (
    <div className={classes.Payment}>
      <div className={classes.PaymentHistory}>
        <PurpleBox caption="Affiliate Balance" value="$10, 000" symbol="$" />

        <WhiteBox caption="Affiliate Withdrawal Request" icon="Settings" />
      </div>
      <div className={classes.PaymentContent} style={{ borderRadius: '10px' }}>
        <div className={classes.PaymentHistoryBox}>
          <div
            className={[classes.PaymentHistoryBoxHead, classes.StatsHead].join(
              ' '
            )}
          >
            Affiliate Payment History
          </div>
        </div>
        <div style={{ padding: '0px 20px' }}>
          <Box state={state} headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
