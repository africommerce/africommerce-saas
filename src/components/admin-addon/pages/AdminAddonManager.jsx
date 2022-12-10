import AddonTabs from './AddonTabs';
import classes from './AdminAddonManager.module.css';
import offinePayment from '../../../assests/admin/offline_banner.jpg';
import clubPoint from '../../../assests/admin/club_points.png';
import posBanner from '../../../assests/admin/pos_banner.jpg';
import paytm from '../../../assests/admin/paytm.png';
import sellerSubscription from '../../../assests/admin/seller_subscription.jpg';
import otpSystem from '../../../assests/admin/otp_system.jpg';
import refundRequest from '../../../assests/admin/refund_request.png';
import affliateBanner from '../../../assests/admin/affiliate_banner.jpg';
import africanPay from '../../../assests/admin/africanpg.jpg';
import deliveryBoy from '../../../assests/admin/delivery_boy.png';
import auction from '../../../assests/admin/auction.png';
import wholesale from '../../../assests/admin/wholesale.png';
import { Switch } from '@mui/material';

export const AdminAddonManager = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addon_top}>
        <AddonTabs />
      </div>
      <div className={classes.addon_container}>
        {[
          {
            img: offinePayment,
            name: 'Offline Payment',
            version: '1.3',
            status: true,
          },
          {
            img: clubPoint,
            name: 'Club_Point',
            version: '1.4',
            status: true,
          },
          {
            img: posBanner,
            name: 'Point of Sale',
            version: '1.8',
            status: true,
          },
          {
            img: paytm,
            name: 'Paytm',
            version: '1.5',
            status: true,
          },
          {
            img: sellerSubscription,
            name: 'Seller Subscription System',
            version: '1.8',
            status: true,
          },
          {
            img: otpSystem,
            name: 'OTP',
            version: '2.0',
            status: true,
          },
          {
            img: refundRequest,
            name: 'Refund',
            version: '1.3',
            status: true,
          },
          {
            img: affliateBanner,
            name: 'Affiliate',
            version: '1.7',
            status: true,
          },
          {
            img: africanPay,
            name: 'African Payment Gateways',
            version: '1.4',
            status: true,
          },
          {
            img: deliveryBoy,
            name: 'Delivery_boy',
            version: '2.1',
            status: true,
          },
          {
            img: auction,
            name: 'Auction',
            version: '1.3',
            status: true,
          },
          {
            img: wholesale,
            name: 'Wholesale',
            version: '1.2',
            status: true,
          },
        ].map((item) => (
          <span className={classes.addon_wrapper}>
            <span className={classes.addon_left}>
              <span className={classes.addon_img}>
                <img src={item.img} alt="" />
              </span>
              <span className={classes.addon_name}>{item.name}</span>
              <span className={classes.addon_version}>
                {' '}
                version {item.version}
              </span>
            </span>
            <span className={classes.addon_right}>
              <span className={classes.addon_status}>
                <Switch defaultChecked={item.status} />
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
