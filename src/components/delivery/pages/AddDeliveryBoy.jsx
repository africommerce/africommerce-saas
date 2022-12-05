import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import classes from './AddDeliveryBoy.module.css';
export const AddDeliveryBoy = () => {
  const [country, setCountry] = useState([]);
  const [states, setStates] = useState([]);

  const statesHandler = (event) => {
    console.log(event.target.value);
    setStates(event.target.value);
  };

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries/states`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.data);
      });
  }, [setCountry]);
  console.log(country);
  return (
    <div className={classes.container}>
      <form className={classes.form_container}>
        <div className={classes.form_title}>Delivery Boy Information</div>
        <Divider />
        <div className={classes.form_body}>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Name <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="text" placeholder="Name" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Email <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="email" placeholder="Email" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Phone <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="tel" placeholder="Phone" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Password <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="password" placeholder="Password" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Country <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <select>
                {country.map((item) => (
                  <option value="" key={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                State <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <select>
                {country.map((item) => (
                  <option value="" key={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                City <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="text" placeholder="City" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Image <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="file" placeholder="Image" />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>
              <label>
                Address <span>*</span>{' '}
              </label>
            </span>
            <span className={classes.form_input}>
              <input type="text" placeholder="Address" />
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};
