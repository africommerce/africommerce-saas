import * as React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import classes from './AdminSmsTemplate.module.css';
import { Outlet, NavLink, Route, Routes } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function PhoneNumber() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section className={classes.section}>
      <label className={classes.label}>
        <h4>SMS Body</h4>
        <div className={classes.textarea}>
          <textarea
            style={{ width: '500px', height: '20px' }}
            value={text}
            placeholder={
              '[[code]] is your verification code for [[site_name]].'
            }
            onChange={(e) => setText(e.target.value)}
          />{' '}
          <h5>**N.B : Do Not Change The Variables Like [[ ____ ]].**</h5>
        </div>
      </label>
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}
function PasswordReset() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section>
      <label className={classes.label}>
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
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}
function OrderPlacement() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section>
      <label className={classes.label}>
        <h4>Activation</h4>
        <h4>SMS Body</h4>
        <div className={classes.textarea}>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
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
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}
function DeliveryStatus() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section>
      <label className={classes.label}>
        <h4>SMS Body</h4>
        <div className={classes.textarea}>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
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
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}
function PaymentStatus() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section>
      <label className={classes.label}>
        <h4>SMS Body</h4>
        <div className={classes.textarea}>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
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
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}
function AssignDelivery() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  return (
    <section>
      <label className={classes.label}>
        <h4>SMS Body</h4>
        <div className={classes.textarea}>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
          <textarea
            style={{ width: '200px', height: '10px' }}
            value={text}
            placeholder={
              '[[code]] is your verification code for [[site_name]].'
            }
            onChange={(e) => setText(e.target.value)}
          />{' '}
          <h5>**N.B : Do Not Change The Variables Like [[ ____ ]].**</h5>
        </div>
      </label>
      <label className={classes.label}>
        <h4>Template ID</h4>
        <div className={classes.textarea}>
          <input
            style={{ width: '500px', height: '20px' }}
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
      <button className={classes.button}>Update Settings</button>
    </section>
  );
}

function Layout() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff', borderRadius: '5' }
                  : { color: '#ff6a3d' }
              }
              to="/"
              className="navigate"
            >
              Phone Number Verification
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff' }
                  : { color: '#ff6a3d' }
              }
              to="/passwordReset"
              className="navigate"
            >
              Password Reset
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff' }
                  : { color: '#ff6a3d' }
              }
              to="/orderPlacement"
              className="navigate"
            >
              Order Placement
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff' }
                  : { color: '#ff6a3d' }
              }
              to="/deliveryStatus"
              className="navigate"
            >
              Delivery Status Change
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff' }
                  : { color: '#ff6a3d' }
              }
              to="/paymentStatus"
              className="navigate"
            >
              Payment Status Change
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: 'white', background: '#2d54ff' }
                  : { color: '#ff6a3d' }
              }
              to="/assignDelivery"
              className="navigate"
            >
              Assign Delivery Boy
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function Navigation() {
  return (
    <>
      <div className={classes.smsCard}>
        <div className={classes.smsTemplates}>SMS Templates</div>
        <hr></hr>
        <div style={{ display: 'flex' }}>
          <div>
            <Layout />
          </div>
          <div>
            <Routes>
              <Route>
                <Route path="/" element={<PhoneNumber />} />
                <Route path="/passwordReset" element={<PasswordReset />} />
                <Route path="/orderPlacement" element={<OrderPlacement />} />
                <Route path="/deliveryStatus" element={<DeliveryStatus />} />
                <Route path="/paymentStatus" element={<PaymentStatus />} />
                <Route path="/assignDelivery" element={<AssignDelivery />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export const AdminSmsTemplate = () => {
  return (
    <>
      <Navigation />

      <div className={classes.footer}>
        <p>&copy; v6.3.3</p>
      </div>
    </>
  );
};
