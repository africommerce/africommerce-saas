import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { BarChart } from '../ui/BarChart';
import { PieChart } from '../ui/PieChart';
import classes from './AdminHome.module.css';

export const AdminHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.top_left}>
          <div className={classes.content}>
            <span className={classes.content_title}>Total</span>
            <span className={classes.content_customer}>Customer</span>
            <span className={classes.content_value}>3</span>
          </div>
          <div className={classes.content}>
            <span className={classes.content_title}>Total</span>
            <span className={classes.content_customer}>Order</span>
            <span className={classes.content_value}>342</span>
          </div>
          <div className={classes.content}>
            <span className={classes.content_title}>Total</span>
            <span className={classes.content_customer}>Product Category</span>
            <span className={classes.content_value}>245</span>
          </div>
          <div className={classes.content}>
            <span className={classes.content_title}>Total</span>
            <span className={classes.content_customer}>Product brand</span>
            <span className={classes.content_value}>100</span>
          </div>
        </div>
        <div className={classes.top_right}>
          <div className={classes.left_content}>
            <div className={classes.left_content_title}>Products</div>
            <div className={classes.left_content_chart}>
              <PieChart />
            </div>
          </div>
          <div className={classes.right_content}>
            <div className={classes.right_content_title}>Sellers</div>
            <div className={classes.right_content_chart}>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.middle}>
        <div className={classes.middle_left}>
          <BarChart />
        </div>
        <div className={classes.middle_right}>
          <BarChart />
        </div>
      </div>
      <div className={classes.bottom}>
        <div>
          <h1>Product Slide</h1>
        </div>
      </div>
    </div>
  );
};
