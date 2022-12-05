import { Divider, Switch } from '@mui/material';
import classes from './AdminAfricanConfiguration.module.css';
import flutterWave from '../../../assests/admin/flutterwave.png';
import payfast from '../../../assests/admin/payfast.png';
import { Link } from 'react-router-dom';
export const AdminAfricanConfiguration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.paytm}>
          <span className={classes.paytm_title}>flutterwave Activation</span>
          <Divider />
          <span className={classes.paytm_body}>
            <span className={classes.group}>
              <span className={classes.paytm_label}>
                <img src={flutterWave} alt="" className={classes.paytm_img} />
              </span>
              <span className={classes.paytm_detail}>
                <Switch defaultChecked={true} />
              </span>
            </span>
            <span className={classes.pay_configure}>
              <span>
                You need to configure flutterwave correctly to enable this
                feature.
                <Link to={''}>Configure Now</Link>{' '}
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.paytm}>
          <span className={classes.paytm_title}>Payfast Activation</span>
          <Divider />
          <span className={classes.paytm_body}>
            <span className={classes.group}>
              <span className={classes.paytm_label}>
                <img src={payfast} alt="" className={classes.paytm_img} />
              </span>
              <span className={classes.paytm_detail}>
                <Switch defaultChecked={true} />
              </span>
            </span>
            <span className={classes.pay_configure}>
              <span>
                You need to configure flutterwave correctly to enable this
                feature.
                <Link to={''}>Configure Now</Link>{' '}
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
