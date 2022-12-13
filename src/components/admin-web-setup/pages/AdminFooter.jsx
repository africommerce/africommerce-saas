import classes from './AdminFooter.module.css';
import BasicTabs from './Tab';
export const AdminFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>Website Footer</div>
      <div className={classes.body}>
        <div className={classes.footer_widget}>
          <BasicTabs />
        </div>
        <div className={classes.link_widget}>Link Widget One</div>
        <div className={classes.footer_bottom}>Footer Bottom</div>
        <div className={classes.social_link}>Social Link Widget</div>
        <div className={classes.payment_widget}>Payment Methods Widget</div>
      </div>
    </div>
  );
};
