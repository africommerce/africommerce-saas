import React, { useEffect, useState } from 'react';
import classes from '../../styles/users.module.css';

const DownloadSection = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  const data = [
    {
      id: 1,
      Product: 'Adobe Photoshop Elements 2021 & Premiere Elements 2021',

      options: ['download'],
    },
  ];

  useEffect(() => {
    setState(data);
    setLoading(false);
  }, []);

  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading) {
    content = (
      <div className={classes.ProductPage}>
        <h2>Download Your Product</h2>
        <div className={classes.ProductHeaders}>
          <div>Product</div>
          <div>Options</div>
        </div>
        {state.map((data) => {
          return (
            <div key={data.id} className={classes.PurchaseBox}>
              <div className={classes.Product}>{data.Product}</div>
              <div className={classes.DownloadOptions}>
                {data.options.map((option, i) => (
                  <span key={i} className={classes[option]}>
                    {' '}
                    <ion-icon name={option}></ion-icon>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return content;
};
export default DownloadSection;
