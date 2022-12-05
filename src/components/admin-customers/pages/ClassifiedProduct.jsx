import { DeleteOutline, VisibilityOutlined } from '@mui/icons-material';
import { Divider, Switch } from '@mui/material';
import image from '../../../assests/admin/earphones_a_1.webp';
import classes from './ClassifiedProduct.module.css';
export const ClassifiedProduct = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_head}>Classified Products</div>
      <div className={classes.container_body}>
        <div className={classes.top_wrapper}>
          <span>Classified Products</span>
        </div>
        {/* <Divider /> */}
        <div className={classes.table_container}>
          <table className={classes.table}>
            <tr key="" className={classes.table_head_row}>
              <th className={classes.table_head_input}>
                <input type="checkbox" />
              </th>
              <th className={classes.table_head_name}>Name</th>
              <th className={classes.table_head_image}>image </th>
              <th className={classes.table_head_upload}>Uploaded By</th>
              <th className={classes.table_head_status}>Customer Status</th>
              <th className={classes.table_head_published}>Published</th>
              <th className={classes.table_head_options}>Options</th>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>
                Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink
                Sand Sport Band
              </td>
              <td className={classes.table_body_image}>
                <img src={image} alt="" />
              </td>
              <td className={classes.table_body_upload}>customer</td>
              <td className={classes.table_body_status}>Published</td>
              <td className={classes.table_body_published}>
                <Switch defaultChecked={true} />
              </td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <VisibilityOutlined />
                </span>

                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>
                Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink
                Sand Sport Band
              </td>
              <td className={classes.table_body_image}>
                <img src={image} alt="" />
              </td>
              <td className={classes.table_body_upload}>customer</td>
              <td className={classes.table_body_status}>Published</td>
              <td className={classes.table_body_published}>
                <Switch defaultChecked={true} />
              </td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <VisibilityOutlined />
                </span>

                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>
                Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink
                Sand Sport Band
              </td>
              <td className={classes.table_body_image}>
                <img src={image} alt="" />
              </td>
              <td className={classes.table_body_upload}>customer</td>
              <td className={classes.table_body_status}>Published</td>
              <td className={classes.table_body_published}>
                <Switch defaultChecked={true} />
              </td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <VisibilityOutlined />
                </span>

                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>
                Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink
                Sand Sport Band
              </td>
              <td className={classes.table_body_image}>
                <img src={image} alt="" />
              </td>
              <td className={classes.table_body_upload}>customer</td>
              <td className={classes.table_body_status}>Published</td>
              <td className={classes.table_body_published}>
                <Switch defaultChecked={true} />
              </td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <VisibilityOutlined />
                </span>

                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>
                Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink
                Sand Sport Band
              </td>
              <td className={classes.table_body_image}>
                <img src={image} alt="" />
              </td>
              <td className={classes.table_body_upload}>customer</td>
              <td className={classes.table_body_status}>Published</td>
              <td className={classes.table_body_published}>
                <Switch defaultChecked={true} />
              </td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <VisibilityOutlined />
                </span>

                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
