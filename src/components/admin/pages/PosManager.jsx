import { ArrowDropDown, ArrowDropUp, FireTruck } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminProductCart } from '../pos/AdminProductCart';
import { SearchInput } from '../ui/SearchInput';
import SelectUI from '../ui/SelectUI';

import classes from './PosManager.module.css';
export const PosManager = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setData(data);
      });
  }, [setData]);

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
              {data.map(({ title, price, rating, id, image }) => (
                <Link key={id} style={{ textDecoration: 'none' }}>
                  <AdminProductCart
                    title={title}
                    price={price}
                    inStock={rating.count}
                    key={id}
                    image={image}
                  />
                </Link>
              ))}
            </div>
            <div className={classes.load_more_container}></div>
            <button>Load More</button>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.search_container}>
          <span className={classes.search_wrapper}>
            <SelectUI
              style={{ maxWidth: '100%' }}
              options={[
                { title: 'Walk In Customer' },
                { title: 'Kelvin Moses' },
                { title: 'Ibrahim' },
                { title: 'Raphael' },
              ]}
              label={`Walk In Customer`}
            />
          </span>
          <span className={classes.truck_icon_container}>
            <FireTruck />
          </span>
          <Divider />
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
            <Button
              style={{
                color: 'black',
                padding: '5px',
                border: '1px solid black',
                alignItem: 'center',
                display: 'flex',
                gap: '5px',
              }}
            >
              {' '}
              Shipping{' '}
              <span>
                <ArrowDropUp />
              </span>
            </Button>
            <Button
              style={{
                color: 'black',
                padding: '5px',
                border: '1px solid black',
                alignItem: 'center',
                display: 'flex',
                gap: '5px',
              }}
            >
              Discount{' '}
              <span>
                <ArrowDropDown />
              </span>
            </Button>
          </span>
          <span className={classes.cart_order_btn}>
            <Button
              style={{
                color: 'black',
                padding: '5px',
                border: '1px solid black',
                alignItem: 'center',
                display: 'flex',
                gap: '5px',
              }}
            >
              Place Order
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
