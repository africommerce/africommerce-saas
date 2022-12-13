import { CloseOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import classes from './AdminSellerForm.module.css';

export const AdminSellerForm = (props) => {
  const formCtx = useSelector((state) => state.form);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left_title}>Seller Verification Form</div>
        <Divider />
        <div className={classes.form_wrapper}>
          <form>
            <div className={classes.form_contents}>
              <div className={classes.input_wrapper}>
                {formCtx.inputs.map((item) => (
                  <span className={classes.input_body}>
                    <span className={classes.input_text}>{item.inputName}</span>
                    <span className={classes.input_label}>{item.tag}</span>
                    <span className={classes.input_close}>
                      <CloseOutlined className={classes.x_icon} />
                    </span>
                  </span>
                ))}
              </div>
              <div className={classes.input_types}>
                <div>
                  <span className={classes.text}>Text Input</span>
                  <span className={classes.select}>Select</span>
                  <span className={classes.radio}>Radio</span>
                  <span className={classes.file}>File</span>
                </div>
              </div>
            </div>

            <div className={classes.save_wrapper}>
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
