import classes from './spinner.module.css';

const Spinner = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      {' '}
      <span className={classes.loader}></span>
    </div>
  );
};

export default Spinner;
