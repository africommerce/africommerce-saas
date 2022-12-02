import classes from '../../../styles/affiliate.module.css';
import React, { useState } from 'react';
import PurpleBox from '../components/purpleBox';
import WhiteBox from '../components/whiteBox';
import Backdrop from '../components/backdrop';
const AffiliateSystem = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const setShowBackdropHandler = () => {
    setShowBackdrop(true);
  };
  const setCloseBackdropHandler = () => {
    setShowBackdrop(false);
  };
  return (
    <div className={classes.System}>
      {showBackdrop ? <Backdrop click={setCloseBackdropHandler} /> : null}
      <div className={classes.SystemBoxes}>
        <PurpleBox caption="Affiliate Balance" value="$10, 000" symbol="$" />

        <WhiteBox caption="Configure Payout" icon="Settings" />
        <WhiteBox
          caption="Withdrawal Request"
          icon="Plus"
          click={setShowBackdropHandler}
        />
      </div>
      <div className={classes.Code}>
        <textarea
          readOnly
          value="https://www.devhedris.netlify.app"
          className={classes.Input}
        />
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <button className={classes.ButtonCopy}>Copy URL</button>
        </div>
      </div>
      <div className={classes.AffiliateStats}>
        <div className={classes.StatsHead}>
          <div style={{ fontWeight: 'bolder' }}>Affiliates Stats</div>
          <div>Choose</div>
        </div>
        <div className={classes.StatsContent}>
          <div className={classes.StatsBox}>
            <div className={classes.Number}>
              <span>3</span>
            </div>
            <div className={classes.Caption}>No of clicks</div>
          </div>{' '}
          <div className={classes.StatsBox}>
            <div className={classes.Number}>
              <span>0</span>
            </div>
            <div className={classes.Caption}>No of items</div>
          </div>{' '}
          <div className={classes.StatsBox}>
            <div className={classes.Number}>
              <span>0</span>
            </div>
            <div className={classes.Caption}>No of Delivered</div>
          </div>
          <div className={classes.StatsBox} style={{ marginRight: '0px' }}>
            <div className={classes.Number}>
              <span>0</span>
            </div>
            <div className={classes.Caption}>No of cancel</div>
          </div>{' '}
        </div>
      </div>
      <div className={classes.History}>
        <div className={classes.StatsHead}>
          <div style={{ fontWeight: 'bold' }}>Affiliate Earning History</div>
        </div>
        <div className={classes.HistoryContent}>
          <div className={classes.Tags}>
            <div className={classes.sn}>#</div>
            <div className={classes.Ref}>Referral User</div>
            <div className={classes.Amount}>Amount </div>
            <div className={classes.Ref}>Order ID</div>
            <div className={classes.Ref}>Referral Type</div>
            <div className={classes.Ref}>Product</div>
            <div className={classes.Ref}>Date</div>
          </div>
          <div
            style={{
              paddingBlock: '40px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: '50px', marginBotton: '20px' }}>😢</div>
            <div>Nothing found</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSystem;
