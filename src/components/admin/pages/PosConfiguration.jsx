import BasicCard from '../ui/Card';
import classes from './PosConfiguration.module.css';
export const PosConfiguration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}> POS Activation for Seller</div>
      <div className={classes.card}>
        <BasicCard />
      </div>
    </div>
  );
};
