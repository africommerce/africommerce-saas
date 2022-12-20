import { ArrowDropDownOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { File } from '../File';
import classes from './AdminAllUpload.module.css';
export const AdminAllUpload = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <span className={classes.head_title}>All uploaded files</span>
        <span className={classes.head_btn_wrapper}>
          <button>Upload New File</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.body_head_left}>All files</span>
          <span></span>
          <span className={classes.body_head_right}>
            <span className={classes.body_head_action}>
              Bulk Action <ArrowDropDownOutlined />
            </span>
            <span>
              <select className={classes.body_head_sort}>
                <option value="" key="" selected>
                  {' '}
                  Sort by newest
                </option>
                <option value="" key="">
                  {' '}
                  Sort by oldest
                </option>
                <option value="" key="">
                  {' '}
                  Sort by smallest
                </option>
                <option value="" key="">
                  {' '}
                  Sort by largest
                </option>
              </select>
            </span>

            <span className={classes.body_head_search}>
              <input type="text" placeholder="Search your files" />
            </span>
            <span className={classes.search_btn}>
              <button>Search</button>
            </span>
          </span>
        </div>
        <Divider />
        <div className={classes.content_wrapper}>
          <span className={classes.content_check}>
            <input type="checkbox" /> Select All
          </span>
        </div>
        <div className={classes.files_wrapper}>
          {[1, 1, 2, 1, 2, 2, 2].map((file) => (
            <File />
          ))}
        </div>
      </div>
    </div>
  );
};
