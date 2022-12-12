import { Divider, Stack, Switch } from '@mui/material';
import React from 'react';
import classes from './AdminAffliateConfiguration.module.css';
export const AdminAffliateConfiguration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.left_basic}>
          <div className={classes.left_basic_head}>Basic Affiliate</div>

          <Divider />
          <div className={classes.left_basic_body}>
            <form>
              <span className={classes.left_form_group}>
                <span className={classes.label}>
                  <label>User Registration & First Purchase</label>
                </span>
                <span className={classes.detail}>
                  <input
                    type="text"
                    className={classes.input}
                    placeholder="20"
                  />{' '}
                  <span className={classes.per}>%</span>
                </span>
              </span>
              <span className={classes.left_form_group}>
                <span className={classes.label}>
                  <label>Status</label>
                </span>
                <span className={classes.detail}>
                  <Switch />
                </span>
              </span>
              <span className={classes.left_form_btn}>
                <button className={classes.save}>Save</button>
              </span>
            </form>
          </div>
        </div>

        <div className={classes.affliate_sharing}>
          <div className={classes.title}>
            Product Sharing Affiliate (Category Wise)
          </div>
          <Divider />

          <div className={classes.affliate_sharing_wrapper}>
            <form className={classes.affliate_sharing_form}>
              <span className={classes.affliate_sharing_group}>
                <span className={classes.switch}>Status</span>
                <span>
                  <Switch />
                </span>
              </span>
              {[
                1,
                2,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
              ].map((item) => (
                <span className={classes.affliate_sharing_group}>
                  <span className={classes.detail}>
                    <input
                      type="text"
                      disabled
                      value={'Women Clothing & Fashion'}
                    />
                  </span>
                  <span className={classes.input}>
                    <span className={classes.value}>
                      <input type="number" placeholder="2" />
                    </span>
                    <span className={classes.select}>
                      {' '}
                      <select>
                        <option value="" key="" selected>
                          {' '}
                          %
                        </option>
                        <option value="" key="" selected>
                          {' '}
                          $
                        </option>
                      </select>
                    </span>
                  </span>
                </span>
              ))}
              <span className={classes.affliate_sharing_btn}>
                <button>Save</button>
              </span>
            </form>
          </div>
        </div>
        <div className={classes.link_validation}>
          <div className={classes.link_head}>
            Affiliate Link Validatin Time (Days)
          </div>
          <Divider />
          <div className={classes.link_body}>
            <form>
              <span className={classes.link_form_group}>
                <span className={classes.link_label}>Validation Time</span>
                <span className={classes.link_info}>
                  <input type="number" placeholder="100" />
                  <span className={classes.link_days}>Days</span>
                </span>
              </span>
              <span className={classes.link_form_btn}>
                <button className={classes.save_btn}>Save</button>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.right_sharing}>
          <span className={classes.right_head}>Product Sharing Affiliate</span>
          <Divider />
          <span className={classes.right_body}>
            <form>
              <span className={classes.right_form_group}>
                <span className={classes.right_detail}>
                  Product Sharing and Purchasing
                </span>
                <span className={classes.right_info}>
                  <input type="number" placeholder="2" />
                </span>
                <span className={classes.right_select}>
                  {' '}
                  <select>
                    <option value="" key="">
                      %
                    </option>
                    <option value="" key="">
                      $
                    </option>
                  </select>
                </span>
              </span>
              <span className={classes.right_form_btn}>
                <button>Save</button>
              </span>
            </form>
          </span>
        </div>
        <div className={classes.right_note}>
          N:B: You can not enable Single Product Sharing Affiliate and Category
          Wise Affiliate at a time.
        </div>
      </div>
    </div>
  );
};
