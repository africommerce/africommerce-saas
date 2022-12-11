import { SentimentVeryDissatisfied } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminAffliateLogs.module.css';

export const AdminAffliateLogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Affiliate Logs</span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_reffered}> Referred By</th>
              <th className={classes.body_head_refferal}>Referral User</th>
              <th className={classes.body_head_amount}> Amount</th>
              <th className={classes.body_head_order}>Order ID</th>
              <th className={classes.body_head_type}> Referral Type</th>
              <th className={classes.body_head_product}>Product</th>

              <th className={classes.body_head_date}>Date</th>
            </tr>
            {[0].map((item) => (
              <tr
                key=""
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <SentimentVeryDissatisfied
                  style={{
                    fontSize: '100px',
                    margin: '0 auto',
                  }}
                />
              </tr>

              // <tr key="" className={classes.body_body_row}>
              //   <td className={classes.body_body_id}>{item}</td>
              //   <td className={classes.body_body_date}>df</td>
              //   <td className={classes.body_body_status}>df</td>
              //   <td className={classes.body_body_phone}>208-295-8053</td>
              //   <td className={classes.body_body_email}>Paul K. Jensen</td>
              //   <td className={classes.body_body_amount}>$5.000</td>
              //   <td className={classes.body_body_status}>
              //     <span>Approved</span>
              //   </td>
              //   <td className={classes.body_body_options}></td>
              // </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
