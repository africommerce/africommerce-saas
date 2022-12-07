import * as React from 'react';
import { useState } from 'react';
import classes from './AdminSmsTemplate.module.css';

export const AdminSmsTemplate = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      <div className={classes.smsCard}>
        <div className={classes.smsTemplates}>SMS Templates</div>
        <hr></hr>

        <div className={classes.body}>
          <nav className={classes.smsText}>
            <ul>
              <li>Phone Number Verification</li>
              <li>Password Reset</li>
              <li>Order Placement</li>
              <li>Delivery Status Change</li>
              <li>Payment Status Change</li>
              <li>Assign Delivery Boy</li>
            </ul>
          </nav>

          <section>
            <label>
              <h4>SMS Body</h4>
              <div className={classes.textarea}>
                <textarea
                  value={text}
                  placeholder={
                    '[[code]] is your verification code for [[site_name]].'
                  }
                  onChange={(e) => setText(e.target.value)}
                />{' '}
                <h5>**N.B : Do Not Change The Variables Like [[ ____ ]].**</h5>
              </div>
            </label>
            <label>
              <h4>Template ID</h4>
              <div className={classes.textarea}>
                <input
                  type="text"
                  value={name}
                  placeholder="Template ID"
                  onChange={(e) => setName(e.target.value)}
                />{' '}
                <h5>
                  **N.B : Template ID is Required Only for Fast2SMS DLT Manual**
                </h5>
              </div>
            </label>
            <button>Update Settings</button>
          </section>
        </div>
      </div>

      <div className={classes.footer}>
        <p>&copy; v6.3.3</p>
      </div>
    </>
  );
};
