import { Divider, Switch } from '@mui/material';
import classes from './AdminAfricanCrendential.module.css';

export const AdminAfricanCrendential = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.paytm_credential}>
          <span className={classes.paytm_credential_title}>
            Flutterwave Credential
          </span>
          <Divider />
          <span className={classes.paytm_credential_body}>
            <form className={classes.paytm_credential_form}>
              {[
                { field: 'FLW_PUBLIC_KEY', placeholder: 'FLW_PUBLIC_KEY' },
                { field: 'FLW_SECRET_KEY', placeholder: 'FLW_SECRET_KEY' },
                {
                  field: 'FLW_SECRET_HASH',
                  placeholder: 'FLW_SECRET_HASH',
                },
                {
                  field: 'FLW_PAYMENT_CURRENCY_CODE',
                  placeholder: 'FLW_PAYMENT_CURRENCY_CODE',
                },
              ].map((item) => (
                <span className={classes.form_group}>
                  <span className={classes.label}>
                    <label>{item.field}:</label>
                  </span>
                  <span className={classes.detail}>
                    <input type="text" placeholder={item.placeholder} />
                  </span>
                </span>
              ))}
              <span className={classes.form_group_btn}>
                <button>Save</button>
              </span>
            </form>
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.paytm_credential}>
          <span className={classes.paytm_credential_title}>
            PAYFAST Credential
          </span>
          <Divider />
          <span className={classes.paytm_credential_body}>
            <form className={classes.paytm_credential_form}>
              {[
                { field: 'PAYFAST_MERCHANT_ID', placeholder: '10000232302' },
                {
                  field: 'PAYFAST_MERCHANT_KEY',
                  placeholder: 'm34n3423n2323n232n3',
                },
              ].map((item) => (
                <span className={classes.form_group}>
                  <span className={classes.label}>
                    <label>{item.field}:</label>
                  </span>
                  <span className={classes.detail}>
                    <input type="text" placeholder={item.placeholder} />
                  </span>
                </span>
              ))}
              <span className={classes.form_group}>
                <span className={classes.label}>
                  <label>PAYFAST Sandbox Mode</label>
                </span>
                <span className={classes.detail}>
                  <span>
                    <Switch />
                  </span>
                </span>
              </span>
              <span className={classes.form_group_btn}>
                <button>Save</button>
              </span>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
};
