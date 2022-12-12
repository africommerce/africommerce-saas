import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UploadButtons from '../../admin/ui/UploadBtn';
import classes from './ProductBrands.module.css';
export const ProductBrands = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header_wrapper}>All Brands</div>
      <div className={classes.body_wrapper}>
        <div className={classes.brand_wrapper}>
          <div className={classes.brand_head}>
            <div className={classes.brand_title}>Brands</div>
            <div className={classes.brand_input}>
              <input type="text" placeholder="Type name & enter" />
            </div>
          </div>
          <Divider />
          <div className={classes.brand_table}>
            <table>
              <tr key="">
                <th>#</th>
                <th>Name</th>
                <th>Logo</th>
                <th>Options</th>
              </tr>
              <Divider />
              {data.map((brand) => (
                <>
                  <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td>{brand.title.split(' ').slice(0, 1)}</td>
                    <td className={classes.brand_image}>
                      <img src={brand.image} alt="" />
                    </td>
                    <td>
                      <span>
                        <EditOutlined />
                      </span>
                      <span className={classes.delete}>
                        <DeleteOutline />
                      </span>
                    </td>
                  </tr>
                  <Divider />
                </>
              ))}
            </table>
          </div>
        </div>
        <div className={classes.add_brand__Wrapper}>
          <div className={classes.add_brand_title}>Add New Brand</div>
          <Divider />
          <div className={classes.add_brand_body}>
            <form className={classes.add_brand_form}>
              <span className={classes.form_group}>
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </span>
              <span className={classes.form_group}>
                <label>
                  Logo <span> (120x80)</span>
                </label>
                <span className={classes.upload}>
                  <UploadButtons style={{ maxWidth: '100%' }}>
                    Browse
                  </UploadButtons>{' '}
                </span>
              </span>
              <span className={classes.form_group}>
                <label>Meta Title</label>
                <input type="text" placeholder="Meta Title" />
              </span>
              <span className={classes.form_group}>
                <label>Meta Description</label>
                <textarea cols="50" rows="20" />
              </span>
              <span className={classes.submit_btn}>
                <button>Save</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
