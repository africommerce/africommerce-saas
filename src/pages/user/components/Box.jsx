import React from 'react';
import classes from '../../../styles/affiliate.module.css';
const Box = ({ state, headers }) => {
  return (
    <>
      <div className={classes.PaymentMain}>
        {headers.map((head, i) => {
          return (
            <div
              key={i}
              style={i === headers.length - 1 ? { flex: '1' } : null}
              className={i === 0 ? classes.PaymentSN : classes.PaymentDate}
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
            <div style={{ fontSize: '12px' }} className={classes.PaymentSN}>
              {i + 1}
            </div>
            <div style={{ fontSize: '12px' }} className={classes.PaymentDate}>
              {data.date}
            </div>
            <div style={{ fontSize: '12px' }} className={classes.PaymentAmount}>
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
                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                    {' '}
                    {data.status}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Box;
