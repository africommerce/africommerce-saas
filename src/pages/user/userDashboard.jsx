import { Add } from '@mui/icons-material';
import { Box, Button, Divider, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ModalUi from '../../components/ui components/Modal';
import MultipleSelectUi from '../../components/ui components/MultipleSelectUi';

const TableBody = styled.table`
  padding: 1rem;
  display: flex;
  font-size: 12px;
  flex-direction: column;
`;

const TableHeadRow = styled.tr`
  display: flex;
  .id {
    flex: 0.3;
  }
  .date {
    flex: 3;
  }
  .amount {
    flex: 3;
  }
  .payment {
    flex: 6;
  }
  .approval {
    flex: 1;
  }
`;

const TableDataRow = styled.tr`
  display: flex;
  border-top: 1px solid rgb(236, 237, 242);
  .id {
    flex: 0.3;
  }
  .date {
    flex: 3;
  }
  .amount {
    flex: 3;
  }
  .payment {
    flex: 6;
  }
  .approval {
    flex: 1;
  }
`;

const TableTitle = styled.div`
  padding: 1rem;
  display: flex;
`;

const RechargeModal = styled.div`
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    .form-detail {
      input {
        display: flex;
        width: 100%;
      }
    }
    span {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      span {
        display: flex;
        flex: 1;
        align-items: center;
        label {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            color: red;
          }
        }
      }
    }
  }
`;

function userDashboard() {
  return (
    <Stack
      direction={'row'}
      display={'flex'}
      padding={'1rem'}
      margin={'0 auto'}
      sx={{ width: '90%' }}
    >
      <Stack width={'100%'} spacing={2}>
        <Box fontWeight={'bold'}>Dashboard</Box>
        <Stack
          display={'flex'}
          direction={'row'}
          spacing={2}
          justifyContent="space-between"
        >
          {' '}
          <Stack
            sx={[
              {
                background: 'linear-gradient(rgb(184,84,166), rgb(228,73,138))',
                cursor: 'pointer',
                fontWeight: 'bolder',
                color: 'white',
              },
            ]}
            display={'flex'}
            flexDirection={'column'}
            gap={'2rem'}
            bgcolor="red"
            flex={1}
            borderRadius={3}
            padding={'1rem'}
          >
            <Box>
              <h1>0 Product</h1>
            </Box>
            <Box fontSize={'12px'}>in your cart</Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDirection={'column'}
            gap={'2rem'}
            bgcolor="white"
            flex={1}
            borderRadius={3}
            padding={'1rem'}
            sx={[
              {
                background:
                  'linear-gradient(rgb(103,145,217),rgb(129,210,245))',
                cursor: 'pointer',
                fontWeight: 'bolder',
                color: 'white',
              },
            ]}
          >
            <Box>
              <h1>8 Products</h1>
            </Box>
            <Box fontSize={'12px'}>in your wishlist</Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDirection={'column'}
            gap={'2rem'}
            bgcolor="white"
            flex={1}
            borderRadius={3}
            padding={'1rem'}
            sx={[
              {
                background: 'linear-gradient(rgb(83,70,186),rgb(123,89,191))',
                cursor: 'pointer',
                fontWeight: 'bolder',
                color: 'white',
              },
            ]}
          >
            <Box>
              <h1>95 Products</h1>
            </Box>
            <Box fontSize={'12px'}>you ordered</Box>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={'2rem'}>
          <Stack
            sx={{
              width: '100%',
              background: 'white',
              boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.26)',
              borderRadius: '5px',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ padding: '1rem' }}>Default Shipping Address</Box>
              <Divider />
              <Box sx={{ padding: '1rem' }}>Default Shipping Address</Box>
            </Box>
          </Stack>
          <Stack
            sx={{
              width: '100%',
              background: 'white',
              boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.26)',
              borderRadius: '5px',
            }}
          >
            Default Shipping Address
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default userDashboard;
