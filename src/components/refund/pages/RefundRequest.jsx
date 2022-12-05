import {
  DeleteOutline,
  KeyboardDoubleArrowLeft,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RefundRequest.module.css';
export const RefundRequest = () => {
  return (
    <div className={classes.container}>
      <div className={classes.table_wrapper}>
        <div className={classes.table_head}>Refund Request All</div>
        <Divider />
        <div className={classes.table_body}>
          <table>
            <tr key="2" className={classes.table_head_row}>
              <th className={classes.head_no}>#</th>
              <th className={classes.head_code}>Order Code</th>
              <th className={classes.head_seller}>Seller Name</th>
              <th className={classes.head_product}>Product</th>
              <th className={classes.head_price}>Price</th>
              <th className={classes.head_approval}>Seller Approval</th>
              <th className={classes.head_refund}>Refund Status</th>
              <th className={classes.head_options}>Options</th>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="3" className={classes.table_body_row}>
              <td className={classes.head_no}>1</td>
              <td className={classes.head_code}>20220420-07435544</td>
              <td className={classes.head_seller}> Filon Asset Store</td>
              <td className={classes.head_product}>
                <span>
                  <img src="../df" alt="" />
                </span>
                <span>
                  <Link to={``}>
                    Under Armour Men's Charged Assert 9 Running Shoe
                  </Link>
                </span>
              </td>
              <td className={classes.head_price}> $12.150 </td>
              <td className={classes.head_approval}>
                <span>Pending</span>
              </td>
              <td className={classes.head_refund}>
                <span>Non-Paid</span>
              </td>
              <td className={classes.head_options}>
                <span className={classes.arrow}>
                  <KeyboardDoubleArrowLeft />
                </span>
                <span className={classes.delete}>
                  <DeleteOutline />
                </span>
                <span className={classes.visible}>
                  <VisibilityOutlined />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
