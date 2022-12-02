import React from 'react';
import classes from '../../../styles/affiliate.module.css';
const Backdrop = ({ click }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: '0',
        transition: 'all 5s',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          minWidth: '500px',
          borderRadius: '5px',
          padding: '10px',
          minHeight: '230px',
          boxSizing: 'border-box',
        }}
      >
        <div className={classes.StatsHead} style={{ alignItems: 'center' }}>
          <div style={{ fontWeight: 'bolder' }}>Affiliate Withdraw Request</div>
          <div
            style={{
              fontSize: '35px',
              fontWeight: 'lighter',
              cursor: 'pointer',
            }}
            onClick={click}
          >
            &times;
          </div>
        </div>
        <form className={classes.AffiliateForm}>
          <div className={classes.AffiliateFormDiv}>
            <label>Amount</label>
            <input
              type="number"
              placeholder="Amount"
              className={classes.AffiliateFormInput}
            />
          </div>
          <div className={classes.AffiliateSubmitButton}>
            <button type="submit" className={classes.ButtonCopy}>
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Backdrop;
