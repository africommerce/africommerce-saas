import { Divider } from '@mui/material';
import CustomBtn from '../../admin/ui/CustomBtn';
import UploadButtons from '../../admin/ui/UploadBtn';
import classes from './BulkProductImport.module.css';
export const BulkProductImport = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <span>
            <span>Product Bulk Upload</span>
            <span>
              <Divider />
            </span>
          </span>
        </div>
        <div className={classes.body}>
          {' '}
          <div className={classes.steps}>
            <span>
              <b>Step 1</b>
            </span>
            <span>
              <p>1. Download the skeleton file and fill it with proper data.</p>
              <p>
                2. You can download the example file to understand how the data
                must be filled.
              </p>
              <p>
                3. Once you have downloaded and filled the skeleton file, upload
                it in the form below and submit.
              </p>
              <p>
                4. After uploading products you need to edit them and set
                product's images and choices.
              </p>
            </span>
          </div>
          <div>
            <CustomBtn>Dowload CSV</CustomBtn>{' '}
          </div>
          <div className={classes.steps}>
            <span>
              <b>Step 2</b>
            </span>
            <span>
              <p>1. Category and Brand should be in numerical id.</p>
              <p>2. You can download the pdf to get Category and Brand id.</p>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <CustomBtn>Dowload Category</CustomBtn>
            <CustomBtn>Dowload Brand</CustomBtn>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <span>
            <span>Upload Product File</span>
            <span>
              <Divider />
            </span>
          </span>
        </div>
        <div className={classes.upload}>
          {' '}
          <div className={classes.upload_wrapper}>
            <span className={classes.choose}>
              <label>Choose file</label>
            </span>
            <span className={classes.upload_btn}>
              <UploadButtons>Upload CSV</UploadButtons>
            </span>
          </div>
          <div>
            <CustomBtn>Upload CSV</CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
