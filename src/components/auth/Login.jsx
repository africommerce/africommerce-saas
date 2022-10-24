import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 50px;

  td {
    text-align: left;
    padding: 10px;
    border: 1px solid #dddddd;
  }
`;

const FlexCol2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Login = () => {
  const PaperStyle = {
    padding: 30,
    borderRadius: 6,
    width: '80%',
    maxWidth: 420,
    margin: '0 auto',
  };
  return (
    <form>
      <Grid>
        <Paper elevation={2} style={PaperStyle}>
          <Grid align="center">
            <Typography style={{ marginBottom: '30px' }}>
              <h2>Login to your Account</h2>
            </Typography>
          </Grid>
          <TextField
            sx={{ marginBottom: '20px' }}
            fullWidth
            label="Email"
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
          <TextField
            sx={{ marginBottom: '25px' }}
            type="password"
            fullWidth
            label="Password"
            id="outlined-basic"
            variant="outlined"
            size="small"
          />

          <FlexCol2>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Link href="#" underline="none" color="inherit">
              Forget Password?
            </Link>
          </FlexCol2>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E62E04',
              '&:hover': {
                backgroundColor: '#dd2c04',
              },
              marginBottom: '40px',
              fontWeight: 'bold',
              size: 'small',
              textTransform: 'none',
              hover: 'none',
            }}
            fullWidth
            disableElevation
          >
            Login
          </Button>
          <TableStyle>
            <tbody>
              <tr>
                <td>
                  <Typography>Seller Account</Typography>
                </td>
                <td>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#25bcf1',
                      '&:hover': {
                        backgroundColor: '#17a2b8',
                      },
                    }}
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>Customer Account</Typography>
                </td>
                <td>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#25bcf1',
                      '&:hover': {
                        backgroundColor: '#17a2b8',
                      },
                    }}
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>Delivery Boy Account</Typography>
                </td>
                <td>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#25bcf1',
                      '&:hover': {
                        backgroundColor: '#17a2b8',
                      },
                    }}
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
            </tbody>
          </TableStyle>

          <div align="center">
            <Link
              href="#"
              sx={{ display: 'block', marginBottom: '10px' }}
              underline="none"
              color="inherit"
            >
              Dont have an account?
            </Link>
            <Link
              to="/auth"
              sx={{ display: 'block', color: 'red' }}
              underline="none"
              color="inherit"
            >
              Register Now
            </Link>
          </div>
        </Paper>
      </Grid>
    </form>
  );
};
