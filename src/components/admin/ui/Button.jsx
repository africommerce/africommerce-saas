import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'gray',
  },
}));

export default function Buttons(props) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center',
        }}
        onClick={props.onClick}
        variant="contained"
      >
        {props.children}
      </ColorButton>
    </Stack>
  );
}
