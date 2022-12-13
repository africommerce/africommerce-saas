import { MoreVert } from '@mui/icons-material';
import classes from './File.module.css';

import image from '../../assests/admin/gold.png';
export const File = () => {
  return (
    <div className={classes.container}>
      <span className={classes.top}>
        <span className={classes.select}>
          <input type="checkbox" />
        </span>
        <span className={classes.more}>
          <MoreVert className={classes.more_icon} />
        </span>
      </span>
      <div className={classes.image_wrapper}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
