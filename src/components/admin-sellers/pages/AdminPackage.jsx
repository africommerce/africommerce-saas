import classes from './AdminPackages.module.css';
import silver from '../../../assests/admin/silver.png';
import gold from '../../../assests/admin/gold.png';
import Platinum from '../../../assests/admin/Platinum.png';
export const AdminPackages = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>
        <span className={classes.top_title}>All Classifies Packages</span>
        <span className={classes.top_button}>
          <button>Add New Packages</button>
        </span>
      </div>
      <div className={classes.body_wrapper}>
        {[
          {
            title: 'Silver',
            logo: silver,
            price: 10,
            product_upload: 100,
            duration: 90,
          },
          {
            title: 'Gold',
            logo: gold,
            price: 20,
            product_upload: 200,
            duration: 240,
          },
          {
            title: 'Platinum',
            logo: Platinum,
            price: 50,
            product_upload: 500,
            duration: 365,
          },
        ].map((item) => (
          <span key={item.title} className={classes.package_container}>
            <span className={classes.logo}>
              <img src={item.logo} alt="" />
            </span>
            <span className={classes.title}> {item.title}</span>
            <span className={classes.price}>${item.price.toFixed(3)}</span>
            <span className={classes.upload}>
              Product Upload Limit: {item.product_upload}
            </span>
            <span className={classes.upload}>
              Package Duration: {item.duration} <b>Days</b>
            </span>
            <span className={classes.actions_buttons}>
              <button className={classes.edit}>Edit</button>
              <button className={classes.delete}>Delete</button>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
