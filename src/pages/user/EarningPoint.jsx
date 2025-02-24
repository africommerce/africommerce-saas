import { Box, Button, Divider, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const TableBody = styled.table`
  padding: 1rem;
  display: flex;
  font-size: 12px;
  flex-direction: column;
`;

const TableHeadRow = styled.tr`
  display: flex;
  .id {
    flex: 0.5;
  }
  .order {
    flex: 5;
  }
  .points {
    flex: 2;
  }
  .converted {
    flex: 3;
  }
  .date {
    flex: 3;
  }
  .action {
    flex: 3;
  }
`;

const TableDataRow = styled.tr`
  display: flex;
  border-top: 1px solid rgb(236, 237, 242);
  .id {
    flex: 0.5;
  }
  .order {
    flex: 5;
  }
  .points {
    flex: 2;
  }
  .converted {
    flex: 3;
    span {
      background: rgb(37, 188, 241);
      color: white;
      padding: 5px;
      border-radius: 5px;
    }
  }
  .date {
    flex: 3;
  }
  .action {
    flex: 3;
  }
`;
const TableTitle = styled.div`
  padding: 1rem;
  display: flex;
`;

const EarningPoint = () => {
  return (
    <Stack
      direction={'row'}
      display={'flex'}
      padding={'1rem'}
      margin={'0 auto'}
      sx={{ width: '90%' }}
    >
      <Stack width={'100%'} spacing={2}>
        <Box fontWeight={'bold'}>My Points</Box>
        <Stack
          display={'flex'}
          direction={'row'}
          spacing={2}
          style={{ margin: '0 auto', maxWidth: '70%', width: '100%' }}
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
            <Box>
              {' '}
              <h1>5 Points = $1.000 Wallet Money</h1>{' '}
            </Box>
            <Box fontSize={'13px'} color={'#FEEBDA'}>
              Exchange rate
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            background: 'white',
            boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.26)',
            borderRadius: '10px',
          }}
        >
          <TableTitle> Point Earning history</TableTitle>
          <Divider />
          <TableBody>
            <TableHeadRow key="">
              <th className="id">#</th>
              <th className="order">Order Code</th>
              <th className="points">Points</th>
              <th className="converted">Converted</th>
              <th className="date">Date</th>
              <th className="action">Actions</th>
            </TableHeadRow>
            {[
              {
                id: 1,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
              {
                id: 2,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
              {
                id: 3,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
              {
                id: 4,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
              {
                id: 5,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
              {
                id: 6,
                code: '20220912-10085522',
                point: 0,
                converted: 'NA',
                date: '12-09-2022',
              },
            ].map((item) => (
              <TableDataRow key={item.id}>
                <td className="id">{item.id}</td>
                <td className="order">{`${item.code} `}</td>
                <td className="points">{item.point}pts </td>
                <td className="converted">
                  <span>{item.converted}</span>
                </td>
                <td className="date">{item.date}</td>
                <td className="action">
                  <Button
                    sx={[
                      {
                        background: 'rgb(230,46,4)',
                        color: 'white',
                        borderRadius: '5px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                          background: 'rgb(230,46,4,0.8)',
                        },
                      },
                    ]}
                  >
                    Convert Now
                  </Button>
                </td>
              </TableDataRow>
            ))}
          </TableBody>
        </Box>
      </Stack>
    </Stack>
  );
};

export default EarningPoint;
