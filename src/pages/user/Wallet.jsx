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

function Wallet() {
  return (
    <Stack
      direction={'row'}
      display={'flex'}
      padding={'1rem'}
      margin={'0 auto'}
      sx={{ width: '90%' }}
    >
      <Stack width={'100%'} spacing={2}>
        <Box fontWeight={'bold'}>My Wallet</Box>
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
            alignItems={'center'}
            gap={'1rem'}
            justifyContent={'center'}
            bgcolor="red"
            flex={1}
            borderRadius={3}
            padding={'1rem'}
          >
            <Box>$</Box>
            <Box>${(1, 703).toFixed(3)}</Box>
            <Box>Wallet Balance</Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'1rem'}
            justifyContent={'center'}
            bgcolor="white"
            flex={1}
            borderRadius={3}
            padding={'1rem'}
            sx={[
              {
                '&:hover': {
                  cursor: 'pointer',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                },
              },
            ]}
          >
            <Box>
              <ModalUi
                // style={{ width: '1000px' }}
                title={'Recharge Wallet'}
                icon={
                  <Add
                    sx={[
                      {
                        padding: '1rem',
                        alignItems: 'center',
                        background: 'gray',
                        color: 'white',
                        borderRadius: '50%',
                        fontWeight: 'bolder',
                        justifyContent: 'center',

                        '&:hover': {
                          background: 'red',
                          cursor: 'pointer',
                        },
                      },
                    ]}
                  />
                }
              >
                <RechargeModal>
                  <form>
                    <span className="form-group">
                      <span className="form-label">
                        <label>
                          {' '}
                          Amount <span>*</span>
                        </label>
                      </span>
                      <span className="form-detail">
                        <input type="text" placeholder="Amount" />
                      </span>
                    </span>
                    <span className="form-group">
                      <span className="form-label">
                        <label>
                          {' '}
                          Amount <span>*</span>
                        </label>
                      </span>
                      <span className="form-detail">
                        <MultipleSelectUi
                          sx={{ minWidth: '200px' }}
                          data={['Paypal', 'Flutterwave', 'Mara ', 'ChiMoney']}
                        />
                      </span>
                    </span>
                    <span className="form-submit">
                      <Button
                        sx={[
                          {
                            background: 'orange',
                            color: 'white',
                            '&:hover': { background: 'orange', color: 'white' },
                          },
                        ]}
                      >
                        Confirm
                      </Button>
                    </span>
                  </form>
                </RechargeModal>
              </ModalUi>
            </Box>
            <Box>Recharge Wallet</Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'1rem'}
            justifyContent={'center'}
            bgcolor="white"
            flex={1}
            borderRadius={3}
            sx={[
              {
                padding: '1rem',
                '&:hover': {
                  cursor: 'pointer',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                },
              },
            ]}
          >
            <Box>
              <ModalUi
                title={'Offline Recharge Wallet'}
                icon={
                  <Add
                    sx={[
                      {
                        padding: '1rem',
                        alignItems: 'center',
                        background: 'gray',
                        color: 'white',
                        borderRadius: '50%',
                        fontWeight: 'bolder',
                        justifyContent: 'center',

                        '&:hover': {
                          background: 'red',
                          cursor: 'pointer',
                        },
                      },
                    ]}
                  />
                }
              >
                <RechargeModal>
                  <form>
                    <span className="form-group">
                      <span className="form-label">
                        <label>
                          {' '}
                          Amount <span>*</span>
                        </label>
                      </span>
                      <span className="form-detail">
                        <input type="text" placeholder="Amount" />
                      </span>
                    </span>
                    <span className="form-group">
                      <span className="form-label">
                        <label>
                          {' '}
                          Transaction ID <span>*</span>
                        </label>
                      </span>
                      <span className="form-detail">
                        <input type="text" placeholder="Transaction ID " />
                      </span>
                    </span>
                    <span className="form-group">
                      <span className="form-label">
                        <label>
                          {' '}
                          Photo <span>*</span>
                        </label>
                      </span>
                      <span className="form-detail">
                        <input type="file" />
                      </span>
                    </span>
                    <span className="form-submit">
                      <Button
                        sx={[
                          {
                            background: 'orange',
                            color: 'white',
                            '&:hover': { background: 'orange', color: 'white' },
                          },
                        ]}
                      >
                        Confirm
                      </Button>
                    </span>
                  </form>
                </RechargeModal>
              </ModalUi>
            </Box>
            <Box>Offline Recharge Wallet</Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            background: 'white',
            boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.26)',
            borderRadius: '10px',
          }}
        >
          <TableTitle> Wallet Recharge History</TableTitle>
          <Divider />
          <TableBody>
            <TableHeadRow key="">
              <th className="id">#</th>
              <th className="date">Date</th>
              <th className="amount">Amount</th>
              <th className="payment">Payment method</th>
              <th className="approval">Approval</th>
            </TableHeadRow>
            {[
              {
                id: 1,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
              {
                id: 2,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
              {
                id: 3,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
              {
                id: 4,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
              {
                id: 5,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
              {
                id: 6,
                date: '05-06-2022',
                amount: 233,
                payment_method: 'Refund',
                approval: 'N/A',
              },
            ].map((item) => (
              <TableDataRow key={item.id}>
                <td className="id">{item.id}</td>
                <td className="date">{item.date}</td>
                <td className="amount">{item.amount}</td>
                <td className="payment">{item.payment_method}</td>
                <td className="approval">{item.approval}</td>
              </TableDataRow>
            ))}
          </TableBody>
        </Box>
      </Stack>
    </Stack>
  );
}
export default Wallet;
