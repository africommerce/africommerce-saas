import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';
import subscribe from '../../assests/subscribe.png';
import styled from 'styled-components';
import { useEffect } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  height: '90vh',
  border: 'none',
  bgcolor: 'background.paper',
};
const Input = styled.input`
  display: flex;
  width: 70%;
  height: 1rem;
  margin: 0 auto;
  outline: none;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid rgb(230, 46, 4);
  @media (min-width: 1025px) and (max-width: 1280px) {
    background: red;
  }
`;
const SubscribeButton = styled.button`
  margin: 0 auto;
  align-items: center;
  width: 70%;
  padding: 10px;
  border: none;
  text-align: center;
  color: white;
  cursor: pointer;
  background: rgb(230, 46, 4);
  border-radius: 3px;
`;
export default function SubscribeModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span
            style={{
              display: 'flex',
              position: 'absolute',
              right: '-10px',
              background: 'white',
              cursor: 'pointer',
              borderRadius: '50%',
              top: '-20px',
            }}
            onClick={handleClose}
          >
            <Close sx={{ padding: '10px' }} />
          </span>
          <Typography
            sx={{
              backgroundImage: `url(${subscribe})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            height="50%"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              justifyContent: 'center!important',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              left: '0',
              // gap: '2rem',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontWeight: '800',
                  fontSize: '2rem',
                  textAlign: 'center',
                }}
              >
                Subscribe to Our Newsletter
              </span>
              <span style={{ fontSize: '13px', textAlign: 'center' }}>
                Subscribe our newsletter for coupon, offer and exciting
                promotional discount..
              </span>
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                height: '100px',
              }}
            >
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                  outline: 'none',
                  gap: '1rem',
                  // height: '100px',
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton>Subscribe Now</SubscribeButton>
              </form>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
