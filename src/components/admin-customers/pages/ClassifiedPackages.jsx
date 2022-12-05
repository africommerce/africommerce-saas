import classes from './ClassifiedPackages.module.css';
import basic from '../../../assests/admin/basic.png';
import standard from '../../../assests/admin/standard.png';
import premium from '../../../assests/admin/Premium.png';
export const ClassifiedPackages = () => {
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
          { title: 'Basic', logo: basic, price: 0, product_upload: 2 },
          {
            title: 'Standard',
            logo: standard,
            price: 20,
            product_upload: 200,
          },
          {
            title: 'Premium',
            logo: premium,
            price: 30,
            product_upload: 300,
          },
        ].map((item) => (
          <span key={item.title} className={classes.package_container}>
            <span className={classes.logo}>
              <img src={item.logo} alt="" />
            </span>
            <span className={classes.title}> {item.title}</span>
            <span className={classes.price}>${item.price.toFixed(3)}</span>
            <span className={classes.upload}>
              Product Upload: {item.product_upload}
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
