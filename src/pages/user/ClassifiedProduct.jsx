import React, { useState } from 'react';

function ClassifiedProduct() {
  const [status, setStatus] = useState(true);
  const toggleButton = () => {
    setStatus(!status);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: 'green',
          width: '100px',
          height: '50px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={toggleButton}
      >
        <div
          style={
            status
              ? {
                  backgroundColor: 'black',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  transition: 'all .3s',
                  transform: 'translateX(3rem)',
                }
              : {
                  backgroundColor: 'black',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  transition: 'all .3s',
                  transform: 'translateX(0)',
                }
          }
        ></div>
      </div>
    </div>
  );
}

export default ClassifiedProduct;
