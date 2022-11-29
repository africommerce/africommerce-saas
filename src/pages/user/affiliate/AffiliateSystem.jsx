import classes from '../../../styles/affiliate.module.css';

const AffiliateSystem = () => {
  return (
    <div className={classes.System}>
      <div className={classes.SystemBoxes}>
        <div
          className={[classes.SystemBox, classes.SystemBoxSpecial].join(' ')}
        >
          <div>$</div>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>$10, 000</div>
          <div style={{ fontSize: '13px', fontWeight: '500', opacity: '0.5' }}>
            Affiliate Balance
          </div>
        </div>
        <div className={[classes.SystemBox, classes.SystemBoxWhite].join(' ')}>
          <div>Settings Icon</div>
          <div>Configure payout</div>
        </div>
        <div className={[classes.SystemBox, classes.SystemBoxWhite].join(' ')}>
          <div>Plus icon</div>
          <div>Affiliate Withdrawal Request</div>
        </div>
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
          {' '}
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
          </div>{' '}
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
