import { MenuItem, Pagination, Select, Switch } from '@mui/material';
import { useState } from 'react';
import classes from './Reviews.module.css';
import styled from 'styled-components';

const SwitchBtn = styled(Switch)`
  /* background: red; */
  border-radius: 0;
  color: gray !important;
  background: white;
  font-size: 12px;
  transform: scale(1);

  &:hover {
    border-radius: 0;
    color: gray !important;
    background: white;
    font-size: 12px;
    transform: scale(1);
  }
`;

export const Reviews = () => {
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.container}>
      <div className={classes.header_wrapper}>Product Reviews</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_top}>
          <span>Product Reviews</span>
          <span>
            <Select
              style={{ display: 'flex', minWidth: '250px' }}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={filter}
              label="filter"
              onChange={handleChange}
            >
              <MenuItem defaultValue={true} selected={true} value="xcxcx">
                <em>Filter Review</em>
              </MenuItem>
              <MenuItem value={10}>{'Filter by Rating'}</MenuItem>
              <MenuItem value={20}>{'Rating (High > Low)'}</MenuItem>
              <MenuItem value={30}>{'Filter (Low > High)'}</MenuItem>
            </Select>
          </span>
        </div>
        <div className={classes.body_table_Wrapper}>
          <table className={classes.body_table}>
            <tr key="1" className={classes.table_head}>
              <th className={classes.head_id}>#</th>
              <th className={classes.head_product}>Product</th>
              <th className={classes.head_product_owner}>Product Owner</th>
              <th className={classes.head_customer}>Customer</th>
              <th className={classes.head_rating}>Rating</th>
              <th className={classes.head_comment}>Comment</th>
              <th className={classes.head_published}>Published</th>
            </tr>
            {[
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
              {
                id: 1,
                product:
                  'Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked',
                product_owner: 'Admin',
                customer: {
                  name: 'Paul K. Jensen',
                  email: 'customer@example.com',
                },

                rating: 5,
                Comment:
                  'Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.',
                Published: true,
              },
            ].map((review) => (
              <tr className={classes.table_row} key={review.id}>
                <td className={classes.head_id}>{review.id}</td>
                <td className={classes.head_product}>{review.product}</td>
                <td className={classes.head_product_owner}>
                  {review.product_owner}
                </td>
                <td className={classes.head_customer}>
                  <span className={classes.name}>{review.customer.name}</span>
                  <span className={classes.email}>{review.customer.email}</span>
                </td>
                <td className={classes.head_rating}>{review.rating}</td>
                <td className={classes.head_comment}>{review.Comment}</td>
                <td className={classes.head_published}>
                  <div className={classes.a}>
                    {' '}
                    <SwitchBtn />
                  </div>
                </td>
              </tr>
            ))}
          </table>
          <Pagination
            className={classes.pagination}
            count={10}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};
