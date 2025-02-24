import { useState } from 'react';
import classes from './AdminOtpCredentials.module.css';

export const AdminOtpCredentials = () => {
  const [form, setForm] = useState({
    twilioSid: 'AC9858d10127ebca9f95b7bf844782861e',
    twilioAuthToken: 'c255a80d342e1e224054317d855c9fc1',
    validTwilioNumber: '+12284003201',
    nexmoKey: 'd27cf1fe',
    nexmoSecret: 'pfj7fTStEEg9tIwX',
    sslSmsApiToken: 'SSL SMS API TOKEN',
    sslSmsSid: 'SSL SMS SID',
    sslSmsUrl: 'http://sms.sslwireless.com/pushapi/dynamic/server.php',
    authKey:
      'HtSZYmXdjVgqpWL7Pl6Rw3DKizrk0uvs2MB8yJoGaC1Oe495cUNelVfWwrpQ4b02JcCUnhZDOmxaB6u1',
    entityId: '123',

    sendId: 'FSTSMS',
    mimoUsername: 'MIMO_USERNAME',
    mimoPassword: 'MIMO_PASSWORD',
    mimoSenderId: 'FSTSMS',
    mimApiKey: '12345',
    mimSenderId: '12345',
    mimBaseUrl: 'MIM_BASE_URL',
    msegatApiKey: 'MSEGAT_API_KEY',
    msegatUsername: 'MSEGAT_USERNAME',
    msegatUserSender: 'MSEGAT_USER_SENDER',
  });

  const [manul, setManual] = useState('Promotional Use');

  const handleChange = (event) => {
    setManual(event.target.value);
  };

  return (
    <>
      <section className={classes.section}>
        {/* article */}
        <div className={classes.card__container}>
          <div className={classes.text}>Twilio Credential</div>
          <hr></hr>
          <label>
            TWILIO SID
            <input
              className={classes.input}
              value={form.twilioSid}
              onChange={(e) => {
                setForm({
                  ...form,
                  twilioSid: e.target.value,
                });
              }}
            />
          </label>
          <label>
            TWILIO AUTH TOKEN
            <input
              value={form.twilioAuthToken}
              onChange={(e) => {
                setForm({
                  ...form,
                  twilioAuthToken: e.target.value,
                });
              }}
            />
          </label>
          <label>
            VALID TWILIO NUMBER
            <input
              value={form.validTwilioNumber}
              onChange={(e) => {
                setForm({
                  ...form,
                  validTwilioNumber: e.target.value,
                });
              }}
            />
          </label>
          <button className={classes.Btn}>Save</button>
        </div>
        {/* article */}
        <div className={classes.card__container_nexmo}>
          <div className={classes.text}>Nexmo Credential</div>
          <hr></hr>
          <label>
            NEXMO KEY
            <input
              value={form.nexmoKey}
              onChange={(e) => {
                setForm({
                  ...form,
                  nexmoKey: e.target.value,
                });
              }}
            />
          </label>
          <label>
            NEXMO SECRET
            <input
              value={form.nexmoSecret}
              onChange={(e) => {
                setForm({
                  ...form,
                  nexmoSecret: e.target.value,
                });
              }}
            />
          </label>
          <button className={[classes.Btn, classes.nexmo].join(' ')}>
            Save
          </button>
        </div>
        {/* article */}
        <div className={classes.card__container}>
          <div className={classes.text}>SSL Wireless Credential</div>
          <hr></hr>
          <label>
            SSL SMS API TOKEN
            <input
              value={form.sslSmsApiToken}
              onChange={(e) => {
                setForm({
                  ...form,
                  sslSmsApiToken: e.target.value,
                });
              }}
            />
          </label>
          <label>
            SSL SMS SID
            <input
              value={form.sslSmsSid}
              onChange={(e) => {
                setForm({
                  ...form,
                  sslSmsSid: e.target.value,
                });
              }}
            />
          </label>
          <label>
            SSL SMS URL
            <input
              value={form.sslSmsUrl}
              onChange={(e) => {
                setForm({
                  ...form,
                  sslSmsUrl: e.target.value,
                });
              }}
            />
          </label>
          <button className={classes.Btn}>Save</button>
        </div>
        {/* article */}
        <div className={classes.card__container_auth}>
          <div className={classes.text}>Fast2SMS Credential</div>
          <hr></hr>
          <label className={classes.label}>
            AUTH KEY
            <input
              value={form.authKey}
              onChange={(e) => {
                setForm({
                  ...form,
                  authKey: e.target.value,
                });
              }}
            />
          </label>
          <label className={classes.label}>
            ENTITY ID
            <input
              value={form.entityId}
              onChange={(e) => {
                setForm({
                  ...form,
                  entityId: e.target.value,
                });
              }}
            />
          </label>
          <label className={classes.label}>
            ROUTE
            <select value={manul} onChange={handleChange}>
              <option value="DLT Manual">DLT Manual</option>
              <option value="Promotional Use">Promotional Use</option>
              <option value="Transactional Use">Transactional Use</option>
            </select>
          </label>
          <label className={classes.label}>
            Language
            <select value={manul} onChange={handleChange}>
              <option value="English">English</option>
              <option value="Unicode">Unicode</option>
            </select>
          </label>
          <label className={classes.label}>
            SENDER ID
            <input
              value={form.sendId}
              onChange={(e) => {
                setForm({
                  ...form,
                  sendId: e.target.value,
                });
              }}
            />
          </label>
          <button className={[classes.Btn, classes.auth].join(' ')}>
            Save
          </button>
        </div>
        {/* article */}
        <div className={classes.card__container}>
          <div className={classes.text}>MIMO Credential</div>
          <hr></hr>
          <label className={classes.label}>
            MIMO_USERNAME
            <input
              value={form.mimoUsername}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimoUsername: e.target.value,
                });
              }}
            />
          </label>
          <label className={classes.label}>
            MIMO_PASSWORD
            <input
              className={classes.input}
              value={form.mimoPassword}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimoPassword: e.target.value,
                });
              }}
            />
          </label>
          <label className={classes.label}>
            MIMO_SENDER_ID
            <input
              className={classes.input}
              value={form.mimoSenderId}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimoSenderId: e.target.value,
                });
              }}
            />
          </label>
          <button className={classes.Btn}>Save</button>
        </div>
        {/* article */}
        <div className={classes.card__container}>
          <div className={classes.text}>MIMSMS Credential</div>
          <hr></hr>
          <label className={classes.label}>
            MIM_API_KEY
            <input
              className={classes.input}
              value={form.mimApiKey}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimApiKey: e.target.value,
                });
              }}
            />
          </label>
          <label>
            MIM_SENDER_ID
            <input
              className={classes.input}
              value={form.mimSenderId}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimSenderId: e.target.value,
                });
              }}
            />
          </label>
          <label>
            MIM_BASE_URL
            <input
              className={classes.input}
              value={form.mimBaseUrl}
              onChange={(e) => {
                setForm({
                  ...form,
                  mimBaseUrl: e.target.value,
                });
              }}
            />
          </label>
          <button className={classes.Btn}>Save</button>
        </div>
        {/* article */}
        <div className={classes.card__container}>
          <div className={classes.text}>MSEGAT Credential</div>
          <hr></hr>
          <label>
            MSEGAT_API_KEY
            <input
              className={classes.input}
              value={form.msegatApiKey}
              onChange={(e) => {
                setForm({
                  ...form,
                  msegatApiKey: e.target.value,
                });
              }}
            />
          </label>
          <label>
            MSEGAT_USERNAME
            <input
              className={classes.input}
              value={form.msegatUsername}
              onChange={(e) => {
                setForm({
                  ...form,
                  msegatUsername: e.target.value,
                });
              }}
            />
          </label>
          <label>
            MSEGAT_USER_SENDER
            <input
              className={classes.input}
              value={form.msegatUserSender}
              onChange={(e) => {
                setForm({
                  ...form,
                  msegatUserSender: e.target.value,
                });
              }}
            />
          </label>
          <button className={classes.Btn}>Save</button>
        </div>
      </section>
      <div className={classes.footer}>
        <p>&copy; v6.3.3</p>
      </div>
    </>
  );
};
