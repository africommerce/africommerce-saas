import { Close } from '@mui/icons-material';
import { Divider, Switch } from '@mui/material';
import classes from './AdminHeader.module.css';
import logo from '../../../assests/admin/logo.png';
export const AdminHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>Website Header</div>
      <div className={classes.body}>
        <span className={classes.body_head}>Header Setting</span>
        <Divider />
        <span className={classes.form_wrapper}>
          <form className={classes.form}>
            <span className={classes.form_group}>
              <span className={classes.form_label}>
                <label>Header Logo</label>
              </span>
              <span className={classes.form_input_file}>
                <input type="file" />
                <span className={classes.logo}>
                  <span>
                    <span className={classes.logo_img_container}>
                      <img className={classes.logo_img} src={logo} alt="" />{' '}
                    </span>

                    <span>TOsJZbcQEJ17LVpSulYq2LXlmhJ8xEwCPNxaA6FY .png</span>
                  </span>
                  <span className={classes.close}>
                    <Close style={{ cursor: 'pointer' }} />
                  </span>
                </span>
              </span>
            </span>
            {[
              { name: 'Show Language Switcher?', status: true },
              { name: 'Show Currency Switcher?', status: true },
              { name: 'Enable stikcy header?', status: true },
            ].map((item) => (
              <span className={classes.form_group}>
                <span className={classes.form_label}>
                  <label>{item.name}</label>
                </span>
                <span className={classes.form_input}>
                  <Switch defaultChecked={item.status} />
                </span>
              </span>
            ))}
            <Divider />
            <span className={classes.form_group}>
              <span className={classes.form_label}>
                <label>Topbar Banner</label>
              </span>
              <span className={classes.form_input_file}>
                <input type="file" />
                <span className={classes.logo}>
                  <span>
                    <span className={classes.logo_img_container}>
                      <img className={classes.logo_img} src={logo} alt="" />{' '}
                    </span>

                    <span>TOsJZbcQEJ17LVpSulYq2LXlmhJ8xEwCPNxaA6FY .png</span>
                  </span>
                  <span className={classes.close}>
                    <Close style={{ cursor: 'pointer' }} />
                  </span>
                </span>
              </span>
            </span>
            <span className={classes.form_group}>
              <span className={classes.form_label}>
                <label>Topbar Banner Link</label>
              </span>
              <span className={classes.form_input}>
                <input type="url" placeholder="#" />
              </span>
            </span>
            <Divider />
            <span className={classes.form_group}>
              <span className={classes.form_label}>
                <label>Help line number</label>
              </span>
              <span className={classes.form_input}>
                <input type="phone" placeholder="+234 90534332" />
              </span>
            </span>
            <Divider />
            <span className={classes.form_group_menu}>
              <span>Header Nav Menu</span>
              {[
                {
                  name: 'All Categories',
                  value: 'https://demo.activeitzone.com/ecommerce/categories',
                },
              ].map((item) => (
                <span className={classes.nav_menu}>
                  {' '}
                  <span className={classes.form_label}>
                    <label>
                      <input type="text" value="All Categories" />
                    </label>
                  </span>
                  <span className={classes.form_input_menu}>
                    <input
                      type="url"
                      value="https://demo.activeitzone.com/ecommerce/categories"
                    />
                  </span>
                  <span className={classes.close}>
                    <span>
                      <Close />
                    </span>
                  </span>
                </span>
              ))}
            </span>
            <span className={classes.form_group}>
              <span className={classes.btn}>
                <button>Update</button>
              </span>
            </span>
          </form>
        </span>
      </div>
    </div>
  );
};
