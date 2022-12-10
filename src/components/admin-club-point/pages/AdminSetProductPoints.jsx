import classes from './AdminSetProductPoints.module.css';
import image from '../../../assests/sellers/addidas.jpg';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
export const AdminSetProductPoints = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <table className={classes.table}>
          <tr key="1" className={classes.table_head_row}>
            <th className={classes.table_head_row_id}>#</th>
            <th className={classes.table_head_row_name}>Name</th>
            <th className={classes.table_head_row_owner}>Owner</th>
            <th className={classes.table_head_row_price}>Price</th>
            <th className={classes.table_head_row_point}>Point</th>
            <th className={classes.table_head_row_options}>Option</th>
          </tr>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link id={item} to="">
              <tr key={item} className={classes.table_body_row}>
                <td className={classes.table_body_row_id}>{item}</td>
                <td className={classes.table_body_row_name}>
                  <span className={classes.img}>
                    <img src={image} alt="" />
                  </span>
                  <span className={classes.name_title}>
                    Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked
                  </span>
                </td>
                <td className={classes.table_body_row_owner}>
                  William C. Schroyer
                </td>
                <td className={classes.table_body_row_price}>
                  ${(999).toFixed(2)}
                </td>
                <td className={classes.table_body_row_point}>0</td>
                <td className={classes.table_body_row_options}>
                  <span className={classes.table_body_row_edit}>
                    <EditOutlined />
                  </span>
                </td>
              </tr>
              <Divider />
            </Link>
          ))}
        </table>
      </div>
      <div className={classes.right}>
        <span className={classes.set_point}>
          <span className={classes.set_point_head}>
            Set Point for Product Within a Range
          </span>
          <Divider />
          <form className={classes.form}>
            <span className={classes.set_point_info}>
              Set any specific point for those products what are between
              Min-price and Max-price. Min-price should be less than Max-price
            </span>
            {[
              { name: 'Set Point for multiple products', placeholder: '100' },
              { name: 'Min Price', placeholder: '5' },
              { name: 'Max Price', placeholder: '2500' },
            ].map((item) => (
              <span className={classes.set_point_form_group}>
                <span className={classes.set_point_label}>{item.name}</span>
                <span className={classes.set_point_input}>
                  <input type="text" placeholder={item.placeholder} />
                </span>
              </span>
            ))}
            <span className={classes.set_point_form_group_btn}>
              <button>Save</button>
            </span>
          </form>
        </span>
        <span className={classes.set_point}>
          <span className={classes.set_point_head}>
            Set Point for all Products
          </span>
          <Divider />
          <form className={classes.form}>
            <span className={classes.set_point_info}>
              Set any specific point for those products what are between
              Min-price and Max-price. Min-price should be less than Max-price
            </span>
            {[{ name: 'Set Point For $1.000', placeholder: '1' }].map(
              (item) => (
                <span className={classes.set_point_form_group}>
                  <span className={classes.set_point_label}>{item.name}</span>
                  <span className={classes.set_point_input}>
                    <input type="text" placeholder={item.placeholder} />{' '}
                    <span>Points</span>
                  </span>
                </span>
              )
            )}
            <span className={classes.set_point_form_group_btn}>
              <button>Save</button>
            </span>
          </form>
        </span>
      </div>
    </div>
  );
};
