import React from 'react';
import jjh from '../../assests/sellers/jjh.png';
import rrh from '../../assests/sellers/rrh.png';
import tth from '../../assests/sellers/tth.png';
import wwh from '../../assests/sellers/wwh.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Typography,
  Button,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  Card,
  CardMedia,
} from '@mui/material';

export const SellerUploads = () => {
  const images = [
    {
      id: 1,
      src: jjh,
    },
    {
      id: 2,
      src: rrh,
    },
    {
      id: 3,
      src: tth,
    },
    {
      id: 4,
      src: wwh,
    },
    {
      id: 5,
      src: jjh,
    },
    {
      id: 6,
      src: rrh,
    },
    {
      id: 7,
      src: tth,
    },
    {
      id: 8,
      src: wwh,
    },
    {
      id: 1,
      src: jjh,
    },
    {
      id: 2,
      src: rrh,
    },
    {
      id: 3,
      src: tth,
    },
    {
      id: 4,
      src: wwh,
    },
    {
      id: 1,
      src: jjh,
    },
    {
      id: 2,
      src: rrh,
    },
    {
      id: 3,
      src: tth,
    },
    {
      id: 4,
      src: wwh,
    },
  ];
  return (
    <Box sx={{ pr: 4, backgroundColor: 'white', p: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          my: 3,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          All uploaded files
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E62E04',
            '&:hover': {
              backgroundColor: '#dd2c04',
            },
          }}
        >
          Upload New File
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          border: 1,
          borderBottom: 0,
          py: 3,
          px: 3,
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" sx={{}}>
          All Files
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Select labelId="label" id="select" value="10" size="small">
            <MenuItem value="10">Bulk Action</MenuItem>
            <MenuItem value="20">Delete Selection</MenuItem>
          </Select>
          <Select
            labelId="label"
            id="select"
            value="10"
            size="small"
            sx={{ mx: 1.5, pr: 15 }}
          >
            <MenuItem value="10">Sort by newest</MenuItem>
            <MenuItem value="20">Sort by oldest</MenuItem>
            <MenuItem value="30">Sort by smallest</MenuItem>
            <MenuItem value="40">Sort by largest</MenuItem>
          </Select>
          <TextField
            id="filled-disabled"
            label="Search your files"
            type="text"
            variant="outlined"
            size="small"
            sx={{ width: 300 }}
          />
          <Box sx={{ typography: 'body1' }}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: '#E62E04',
                '&:hover': {
                  backgroundColor: '#dd2c04',
                },
                mx: 1.5,
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ border: 1, pb: 50 }}>
        <Typography variant="h7">
          {<Checkbox />}
          Select All
        </Typography>
        <br />
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
          {images.map(({ id, src }) => {
            return (
              <Card key={id} sx={{ border: '1px solid grey', p: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    {<Checkbox />}
                    {<MoreVertIcon sx={{ pt: '8px', cursor: 'pointer' }} />}
                  </Box>
                  <CardMedia
                    component="img"
                    image={src}
                    alt="vv"
                    sx={{ borderRadius: 2, align: 'center' }}
                  />
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
