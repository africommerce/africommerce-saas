import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classes from './Select.module.css';
export const Select = ({ data, state }) => {
  const [showOption, setShowOption] = useState(false);

  return (
    <span
      className={classes.select_container}
      //   onClick={() => setShowOption(false)}
    >
      <span
        className={classes.select_wrapper}
        onClick={() => setShowOption((prev) => !prev)}
      >
        <label>Women Clothing & Fashion</label>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </span>
      <span
        className={
          showOption
            ? `${classes.dropdown}`
            : `${classes.dropdown} ${classes.hideOption}`
        }
      >
        <input type="text" />
        {data.map((option) => (
          <span className={classes.options}>---Women Clothing & Fashion</span>
        ))}
      </span>
    </span>
  );
};
