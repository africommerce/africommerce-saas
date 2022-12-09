import React , { Fragment }from 'react';
import styled from 'styled-components';
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Collapse,
  Grid,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box } from '@mui/system';
import { Visibility } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';


const Container = styled.div`
  flex: 1;
`;

function createData(num, order, status) {
  return {
    num,
    order,
    status,
    history: [
      { id: "1",
        Date: '19-04-2022',
        Product:
          'Nike Men Mercurial Superfly 7 Elite Firm Ground Football Shoe',
        Amount: '$15.000',
      },
    ],
  };
}

const visibilityStyle = {
  color: '#E62E04',
  marginTop:"15px",
  borderRadius:"10px",
  backgroundColor: "lightpink",
  padding: "5px",
  '&:hover':{
    backgroundColor: '#E62E04',
    color: "white"
  }
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:"7px"
};

const buttonStyle = {
  padding: '20px',
              float: 'right',
              border: 'none',
              width: '90px',
              borderRadius: '10px',
              marginTop: "20px"
}
function ModalWindow(props) {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{display: "flex", justifyContent:"space-between", marginBottom:"20px"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Refund Request Reject Reason
            </Typography>
            <IconButton onClick={props.handleClose}>
              <Close />
            </IconButton>
          </Box><hr></hr>

          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{marginBottom:"20px"}}>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </Typography>
          <Button sx={buttonStyle} onClick={props.handleClose} >
          Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <Fragment>
      <ModalWindow open={modal} handleClose={handleClose} />
      <TableRow >
        <TableCell>
          <Box  onClick={() => setOpen(!open)} style={{ fontSize: 15, display:"flex", flexDirection:"row", }} >
            <Grid item lg={0.8}>
              {open ? (
                <RemoveCircleIcon style={{ color: '#E62E04' }} />
              ) : (
                <AddCircleIcon style={{ color: '#E62E04' }} />
              )}
            </Grid>
            <Grid item lg={11.2} sx={{ fontSize: 17 }}>
              {row.num}
            </Grid>
          </Box>
        </TableCell>
        <TableCell >{row.order}</TableCell>
        <TableCell sx={{display: "flex"}}>
          <Grid sx={{
            color: 'white',
            backgroundColor:
              (row.status === 'Rejected' && '#E62E04') ||
              (row.status === 'Approved' && 'green') ||
              (row.status === 'Pending' && 'blue'),
            borderRadius: 8,
            display: 'inline-block',
            padding: '3px 10px',
            marginTop: '15px',
            textAlign: 'center',

          }}>{row.status}</Grid>

        <Grid>
        {(row.status === "Rejected" && <Visibility sx={visibilityStyle}  onClick={handleOpen} size= "small"/>)}
        </Grid>   
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => ( 
                    <TableRow>
                      <TableCell> Date </TableCell>
                      <TableCell>{historyRow.Date}</TableCell>
                    </TableRow>
                  ))}
                  {row.history.map((historyRow) => (
                    <TableRow>
                      <TableCell> Product </TableCell>
                      <TableCell>{historyRow.Product}</TableCell>
                    </TableRow>
                  ))}
                  {row.history.map((historyRow) => (
                    <TableRow>
                      <TableCell> Amount </TableCell>
                      <TableCell>{historyRow.Amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const rows = [
  createData('1', '20220420-07073292', 'Rejected'),
  createData('2', '20220420-07073292', 'Approved'),
  createData('3', '20220420-07224759', 'Approved'),
  createData('4', '20220420-07435544', 'Pending'),
];

function SentRefundRequest() {
  return (
    <Container>
        <TableContainer component={Paper} sx={{padding: 1,}}>
        <Table aria-label="Refund Request" sx={{tableLayout: "auto"}}>
          <TableHead>
            <TableRow style={{ fontSize: 25, marginTop: 20 }}>
              Applied Refund Request
            </TableRow>
            <TableRow >
              <TableCell> # </TableCell>
              <TableCell> Order ID </TableCell>
              <TableCell> Status </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{padding: 0}}>
            {rows.map((row) => (
              <Row key={row.num} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default SentRefundRequest;
