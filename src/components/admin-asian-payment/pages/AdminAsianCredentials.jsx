import { Divider, Switch } from '@mui/material';
import paytm from '../../../assests/admin/paytm.jpg';
import myfatoorah from '../../../assests/admin/myfatoorah.png';
import totyibpay from '../../../assests/admin/toyyibpay.png';

import classes from './AdminAsianCredentials.module.css';
export const AdminAsianCredentials = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.paytm}>
          <span className={classes.paytm_title}>Paytm Activation</span>
          <Divider />
          <span className={classes.paytm_body}>
            <span className={classes.paytm_label}>
              <img src={paytm} alt="" className={classes.paytm_img} />
            </span>
            <span className={classes.paytm_detail}>
              <Switch defaultChecked={true} />
            </span>
          </span>
        </div>
        <div className={classes.myfatoorah}>
          <span className={classes.myfatoorah_title}>
            MyFatoorah Activation
          </span>
          <Divider />
          <span className={classes.myfatoorah_body}>
            <span className={classes.myfatoorah_label}>
              <img src={myfatoorah} alt="" className={classes.myfatoorah_img} />
            </span>
            <span className={classes.myfatoorah_detail}>
              <Switch defaultChecked={true} />
            </span>
          </span>
        </div>
        <div className={classes.paytm_credential}>
          <span className={classes.paytm_credential_title}>
            Paytm Credential
          </span>
          <Divider />
          <span className={classes.paytm_credential_body}>
            <form className={classes.paytm_credential_form}>
              {[
                { field: 'PAYTM ENVIRONMENT', placeholder: 'local' },
                { field: 'PAYTM MERCHANT ID', placeholder: '343434232320' },
                {
                  field: 'PAYTM MERCHANT KEY',
                  placeholder: 'es7sdh43dw3eer33d33',
                },
                {
                  field: 'PAYTM MERCHANT WEBSITE',
                  placeholder: 'https://business.paymt.com/',
                },
                {
                  field: 'PAYTM CHANNEL',
                  placeholder: 'WEB',
                },
                {
                  field: 'PAYTM INDUSTRY TYPE',
                  placeholder: 'Retail',
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

        <div className={classes.paytm_credential}>
          <span className={classes.paytm_credential_title}>
            Paytm Credential
          </span>
          <Divider />
          <span className={classes.paytm_credential_body}>
            <form className={classes.paytm_credential_form}>
              {[
                { field: 'MYFATOORAH TOKEN', placeholder: 'MYFATOORAH TOKEN' },
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
                  <label>Sandbox Mode</label>
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
      <div className={classes.right}>
        <div className={classes.paytm}>
          <span className={classes.paytm_title}>ToyyibPay Activation</span>
          <Divider />
          <span className={classes.paytm_body}>
            <span className={classes.paytm_label}>
              <img src={totyibpay} alt="" className={classes.paytm_img} />
            </span>
            <span className={classes.paytm_detail}>
              <Switch defaultChecked={true} />
            </span>
          </span>
        </div>
        <div className={classes.paytm_credential}>
          <span className={classes.paytm_credential_title}>
            Paytm Credential
          </span>
          <Divider />
          <span className={classes.paytm_credential_body}>
            <form className={classes.paytm_credential_form}>
              {[
                { field: 'TOYYIBPAY KEY', placeholder: 'TOYYIBPAY KEY' },
                {
                  field: 'TOYYIBPAY CATEGORY',
                  placeholder: 'TOYYIBPAY CATEGORY',
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
                  <label>ToyyibPay Sandbox Mode</label>
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
