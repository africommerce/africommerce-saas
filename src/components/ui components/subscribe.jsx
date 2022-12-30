import React, { useState } from 'react';

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import appStoreImage from '../../assests/app.png';
import googlePlayImage from '../../assests/play.png';
import storeImage from '../../assests/active_ecom.png';

const LogoImg = styled.img`
  width: 200px;
  max-width: 250px;
`;
const PlayStoreImg = styled.img`
  width: 110px;
  max-width: 140px;
  padding: 5px;
`;

const InputField = styled.input`
  width: 170px;
  opacity: 0.9;
  max-width: 180px;
  height: 10px;
  background-color: #fff;
  padding: 1rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.4rem;
`;

export const ButtonSub = styled.span`
  width: 100px;
  color: #fff;
  cursor: pointer;
  background-color: #e62e04;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 43px;
  max-height: 50px;
  border-radius: 0.3rem;
  border: 0;
`;

export const Subscribe = () => {
  const [subEmail, setSubEmail] = useState('');

  const handleSubcription = (e) => {
    e.preventDefault();
  };

  return (
    <Stack style={{ margin: '10px' }}>
      <p>
        <Link to="/">
          <LogoImg alt="active_estore_logo" src={storeImage}></LogoImg>
        </Link>
      </p>
      <p style={{ margin: '20px' }}>
        <small>Complete system for your eCommerce business</small>
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        <InputField
          type="email"
          name="email"
          value={subEmail}
          size="small"
          onChange={(e) => setSubEmail((preveState) => e.target.value)}
          placeholder="Your Email Address"
        ></InputField>
        <ButtonSub onClick={handleSubcription}>Subscribe</ButtonSub>
      </p>
      <p style={{ margin: '20px' }}>
        <Link to="##">
          <PlayStoreImg
            alt="google_play_store"
            src={googlePlayImage}
          ></PlayStoreImg>
        </Link>
        <Link to="###">
          <PlayStoreImg alt="ios_app_store" src={appStoreImage}></PlayStoreImg>
        </Link>
      </p>
    </Stack>
  );
};
