import * as React from 'react';

import Box from '@mui/material/Box';

import CreateProductForm from './CreateProductForm';
import { Divider } from '@mui/material';

export const CreateProduct = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      Add New product
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',

          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flex: '8',
              flexDirection: 'column',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
              borderRadius: '5px',
              padding: '1rem',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              Product Information
              <Divider />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <CreateProductForm />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flex: '4',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
              borderRadius: '5px',
              padding: '1rem',
            }}
          >
            Right
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
