import React from 'react';
import DataBox from './components/dataBox';
import PurpleBox from './components/purpleBox';
import WhiteBox from './components/whiteBox';
import classes from '../../styles/affiliate.module.css';
import Box from './components/Box';
function Wallet() {
  const headers = ['#', 'Date', 'Amount', 'Payment Method', 'Approval'];
  const state = [
    {
      date: '01-06-2022',
      amount: '$5.000',
      method: 'refund',
      approval: 'N/A',
    },
    {
      date: '20-04-2022',
      amount: '$5.000',
      method: 'refund',
      approval: 'N/A',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      method: 'refund',
      approval: 'N/A',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      method: 'refund',
      approval: 'N/A',
    },
    {
      date: '09-03-2020',
      amount: '$20.000',
      method: 'refund',
      approval: 'pending',
    },
  ];
  return (
    <div style={{ flex: '1' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <PurpleBox symbol="$" value="$1,703.300" caption="walllet Balance" />
        <WhiteBox icon="plus" caption="Recharge Walley" />
        <WhiteBox icon="plus" caption="Recharge Walley" />
      </div>
      <div>
        <div
          className={classes.PaymentContent}
          style={{ borderRadius: '10px' }}
        >
          <div className={classes.PaymentHistoryBox}>
            <div
              className={[
                classes.PaymentHistoryBoxHead,
                classes.StatsHead,
              ].join(' ')}
            >
              Wallet Recharge History
            </div>
          </div>
          <div style={{ padding: '0px 20px' }}>
            <div className={classes.PaymentMain}>
              {headers.map((head, i) => {
                return (
                  <div
                    key={i}
                    style={i === headers.length - 1 ? { flex: '1' } : null}
                    className={
                      i === 0 ? classes.PaymentSN : classes.PaymentDate
                    }
                  >
                    {head}
                  </div>
                );
              })}
            </div>
            {state.map((data, i) => {
              return (
                <div
                  className={classes.PaymentMain}
                  key={i}
                  style={
                    state.length - 1 === i
                      ? { paddingBottom: '50px', borderBottom: '0px' }
                      : null
                  }
                >
                  <div
                    style={{ fontSize: '12px' }}
                    className={classes.PaymentSN}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{ fontSize: '12px' }}
                    className={classes.PaymentDate}
                  >
                    {data.date}
                  </div>
                  <div
                    style={{ fontSize: '12px' }}
                    className={classes.PaymentAmount}
                  >
                    {data.amount}
                  </div>
                  {data.method ? (
                    <div
                      style={{ fontSize: '12px', textTransform: 'capitalize' }}
                      className={classes.PaymentMethod}
                    >
                      {data.method}
                    </div>
                  ) : null}
                  {data.status ? (
                    <div className={classes.PaymentMethod}>
                      <div className={[classes[data.status]].join(' ')}>
                        <span
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          {' '}
                          {data.status}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
