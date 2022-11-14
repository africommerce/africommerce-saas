import { ArrowUpward, FireTruck } from '@mui/icons-material';
import React from 'react';
import { AdminProductCart } from '../pos/AdminProductCart';
import { SearchInput } from '../ui/SearchInput';
import SelectUI from '../ui/SelectUI';

import classes from './PosManager.module.css';
export const PosManager = () => {
  return (
    <div className={classes.container} id={classes.container}>
      <div className={classes.left}>
        <div className={classes.search_container}>
          <span className={classes.search_input}>
            <SearchInput
              placeholder={`Search by Product Name/Barcode`}
              style={{ width: '100%' }}
            />
          </span>
          <span className={classes.search_select}>
            <SelectUI
              style={{ maxWidth: '200px' }}
              options={[
                { title: 'All Categories' },
                { title: 'Women Clothing' },
                { title: 'Men Clothing' },
                { title: 'Computer & Accesories' },
              ]}
              label={`All Categories`}
            />
          </span>
          <span className={classes.search_brand}>
            <SelectUI
              style={{ maxWidth: '120px' }}
              options={[
                { title: 'Ford' },
                { title: 'Audi' },
                { title: 'Chevrolet' },
                { title: 'Hyundai' },
              ]}
              label={`All Brand`}
            />
          </span>
        </div>
        <div className={classes.product_container}>
          <div className={classes.content_wrapper}>
            <div className={classes.product_contents}>
              <AdminProductCart />
            </div>
            <div className={classes.load_more_container}></div>
            <button>Load More</button>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.search_container}>
          <span className={classes.search_wrapper}>search</span>
          <span className={classes.truck_icon_container}>
            <FireTruck />
          </span>
        </div>
        <div className={classes.cart_container}>cart</div>
        <div className={classes.cart_summary}>
          <div className={classes.cart_subtotal}>
            <span>Sub Total</span>
            <span>$2403.00</span>
          </div>
          <div className={classes.cart_tax}>
            <span>Tax</span>
            <span>$52.000</span>
          </div>
          <div className={classes.cart_shipping}>
            <span>Shipping</span>
            <span>$0.000</span>
          </div>
          <div className={classes.cart_discount}>
            <span>Discount</span>
            <span>$0.000</span>
          </div>
          <div className={classes.cart_total}>
            <span>
              <strong>Total</strong>
            </span>
            <span>$2403.00</span>
          </div>
        </div>
        <div className={classes.cart_btns}>
          <span className={classes.cart_shipping_btn}>
            <button>
              {' '}
              Shipping{' '}
              <span>
                <ArrowUpward />
              </span>
            </button>
            <button>
              Discount{' '}
              <span>
                <ArrowUpward />
              </span>
            </button>
          </span>
          <span className={classes.cart_order_btn}>
            <button>Place Order</button>
          </span>
        </div>
      </div>
    </div>
  );
};
