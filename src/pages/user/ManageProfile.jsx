import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import {
  Button,
  FormLabel,
  IconButton,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Close } from '@mui/icons-material';
import Modal from '@mui/material/Modal';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const Container = styled.div`
  top: 0;
  margin: 0 auto;
  background: rgb(242, 243, 248);
`;

const inputFileStyle = {
  width: '87%',
  display: 'none',
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '7px',
};

const buttonModalStyle = {
  padding: '10px',
  float: 'right',
  border: 'none',
  width: '90px',
  borderRadius: '10px',
  marginTop: '20px',
  backgroundColor: '#E62E04',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkred',
  },
};

const buttonStyle = {
  padding: '15px',
  color: 'white',
  backgroundColor: '#E62E04',
  fontWeight: 'bolder',
  border: 'none',
  margin: '20px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'darkred',
  },
};

function AddressCard(props) {
  return (
    <div style={{ border: '1px solid grey', padding: '15px', width: '40%' }}>
      <Typography>
        <b>Address:</b> {props.address}
      </Typography>
      <Typography>
        <b>Postal Code:</b> {props.postalcode}
      </Typography>
      <Typography>
        <b>City:</b> {props.city}
      </Typography>
      <Typography>
        <b>State:</b> {props.state}
      </Typography>
      <Typography>
        <b>Country:</b> {props.country}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>
          <b>Phone:</b> {props.phone}
        </Typography>
        {props.default === 'Default' && (
          <Typography
            style={{
              backgroundColor: '#df2c14',
              color: 'white',
              width: '12%',
              fontSize: '11px',
              padding: '2px',
              textAlign: 'center',
              letterSpacing: '1px',
              borderRadius: '5px',
            }}
          >
            {props.default}
          </Typography>
        )}
      </div>
    </div>
  );
}

function ModalWindow(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Address
            </Typography>
            <IconButton onClick={props.handleClose}>
              <Close />
            </IconButton>
          </Box>
          <hr></hr>

          <form>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="address"
                style={{ color: 'black', fontSize: '15px' }}
              >
                Address
              </FormLabel>
              <TextField
                id="address"
                style={{ width: '80%' }}
                type="text"
                placeholder="Your Address"
                required
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="country"
                style={{ color: 'black', fontSize: '15px' }}
              >
                Country
              </FormLabel>
              <Select id="country" style={{ width: '80%' }} required></Select>
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="state"
                style={{ color: 'black', fontSize: '15px' }}
              >
                State
              </FormLabel>
              <Select id="state" style={{ width: '80%' }} required></Select>
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="city"
                style={{ color: 'black', fontSize: '15px' }}
              >
                City
              </FormLabel>
              <Select id="city" style={{ width: '80%' }} required></Select>
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="postal code"
                style={{ color: 'black', fontSize: '15px' }}
              >
                Postal Code
              </FormLabel>
              <TextField
                id="postal code"
                style={{ width: '80%' }}
                type="number"
                placeholder="Your Postal Code"
                required
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <FormLabel
                htmlFor="phone"
                style={{ color: 'black', fontSize: '15px' }}
              >
                Phone
              </FormLabel>
              <TextField
                id="phone"
                style={{ width: '80%' }}
                type="tel"
                placeholder="+234"
                required
              />
            </Box>

            <Button type="submit" sx={buttonModalStyle} onClick={handleSubmit}>
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

function ManageProfile() {
  const [name, setName] = useState('Paul K. Jensen');
  const [phone, setPhone] = useState('208-295-8053');
  const [selectText, setSelectText] = useState('');
  const [photos, setPhotos] = useState('');
  const [imageObject, setImageObject] = useState(undefined);
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <Card>
      <Container style={{ width: 1000, padding: '10px' }}>
        <ModalWindow open={modal} handleClose={handleClose} />
        <Typography
          component="h2"
          style={{
            fontSize: '20px',
            letterSpacing: '1px',
            marginBottom: '20px',
          }}
        >
          Manage Profile
        </Typography>

        <Paper elevation={6} style={{ marginBottom: '15px' }}>
          <Typography
            style={{ fontSize: '20px', margin: '10px', padding: '10px' }}
          >
            Basic Info
          </Typography>
          <hr></hr>
          <form style={{ padding: '25px' }}>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <FormLabel htmlFor="name" style={{ color: 'black' }}>
                Your Name
              </FormLabel>
              <TextField
                id="name"
                style={{ width: '87%' }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <FormLabel htmlFor="phone" style={{ color: 'black' }}>
                Your Phone
              </FormLabel>
              <TextField
                id="phone"
                style={{ width: '87%' }}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <FormLabel style={{ color: 'black' }}>Photo</FormLabel>
              <Box
                style={{
                  display: 'flex',
                  border: '1px solid lightgrey',
                  width: '87%',
                  borderRadius: '5px',
                  gap: '15px',
                }}
              >
                <TextField
                  color="error"
                  type="file"
                  sx={inputFileStyle}
                  id="file"
                  onChange={(e) => {
                    setPhotos(e.target.files[0]);
                    setImageObject(() => {
                      const [file] = e.target.files;
                      return file;
                    });
                    setSelectText('1 File selected');
                  }}
                />
                <Button
                  onClick={() => {
                    document.getElementById('file').click();
                  }}
                  style={{
                    width: '15%',
                    backgroundColor: 'lightgray',
                    padding: '13px',
                  }}
                >
                  Browse
                </Button>
                <Typography style={{ marginTop: '15px', fontSize: '15px' }}>
                  {selectText}
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                marginLeft: '130px',
                width: '150px',
              }}
            >
              {photos && (
                <div style={{ display: 'flex' }}>
                  <img
                    src={URL.createObjectURL(imageObject)}
                    alt="Display"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '5px',
                    }}
                  />
                  <IconButton
                    style={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      marginLeft: '115px',
                      color: 'red',
                    }}
                    onClick={() => {
                      setPhotos('');
                      setSelectText('');
                      setImageObject(undefined);
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </div>
              )}
            </Box>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <FormLabel style={{ color: 'black' }}>Your Password</FormLabel>
              <TextField
                style={{ width: '87%' }}
                type="password"
                placeholder="New Password"
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <FormLabel style={{ color: 'black' }}>Confirm Password</FormLabel>
              <TextField
                style={{ width: '92%' }}
                type="password"
                placeholder="Confirm Password"
              />
            </Box>
          </form>
        </Paper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '15px',
          }}
        >
          <Button sx={buttonStyle}>Update Profile</Button>
        </div>

        <Paper elevation={6} style={{ marginBottom: '15px', padding: '20px' }}>
          <Typography
            style={{ fontSize: '20px', margin: '10px', padding: '10px' }}
          >
            Address
          </Typography>
          <hr></hr>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '20px',
            }}
          >
            <AddressCard
              address="3947 West Side Avenue Hackensack, NJ 07601"
              postalcode="1254"
              city="College"
              state="Alaska"
              country="United States"
              phone="201-287-7714"
              default="Default"
            />

            <AddressCard
              address="Demo"
              postalcode="2250"
              city="Gilberdyke"
              state="Aberdeen"
              country="United Kingdom"
              phone="123456789"
            />
          </div>
          <div
            style={{
              border: '1px solid grey',
              width: '50%',
              margin: '20px auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: '#dddddd',
              textAlign: 'center',
            }}
          >
            <IconButton>
              <AddIcon
                fontSize="large"
                style={{ alignSelf: 'center' }}
                onClick={handleOpen}
              />
            </IconButton>

            <Typography>Add New Address</Typography>
          </div>
        </Paper>

        <Paper elevation={6}>
          <Typography
            style={{ fontSize: '20px', margin: '10px', padding: '10px' }}
          >
            Change your email
          </Typography>
          <hr></hr>
          <form>
            <Box
              style={{
                display: 'flex',
                padding: '10px',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <FormLabel style={{ color: 'black' }}>Your Email</FormLabel>
              <Box style={{ display: 'flex', width: '85%' }}>
                <TextField
                  style={{ width: '90%' }}
                  color="error"
                  type="email"
                  placeholder="customer@example.com"
                />
                <Button style={{ width: '10%', border: '1px solid grey' }}>
                  Verify
                </Button>
              </Box>
            </Box>
          </form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '15px',
            }}
          >
            <Button sx={buttonStyle}>Update Email</Button>
          </div>
        </Paper>
      </Container>
    </Card>
  );
}

export default ManageProfile;
