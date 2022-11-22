import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import {
  ExpandMoreIcon,
  HomeOutlinedIcon,
  ShoppingCartOutlinedIcon,
  FaRegFolderOpen,
  CiBullhorn,
  FaLuggageCart,
  GiGavel,
  FaxOutlinedIcon,
  FaRegMoneyBillAlt,
  AiOutlineBackward,
  SettingsOutlinedIcon,
  HistoryIcon,
  NoteAddOutlinedIcon,
  FaMoneyBillWave,
  CgComment,
  AiOutlineQuestionCircle,
  DiAtom,
} from './SellerIcons';

export const MenuAccordion = () => {
  const [expanded, setExpanded] = useState('panel4');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ color: '#252ead' }}>
      {/****Dashboard  */}
      <Accordion
        style={{ backgroundColor: 'inherit' }}
        expanded={false}
        elevation={0}
      >
        <AccordionSummary>
          <p>
            <HomeOutlinedIcon style={{ fontSize: '14px', marginTop: '4px' }} />
          </p>
          <Typography component="p" variant="div">
            <Link
              to="/auth-seller"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginLeft: '4px',
                fontSize: '14px',
              }}
            >
              Dashboard
            </Link>
          </Typography>
        </AccordionSummary>
      </Accordion>
      {/****Products  */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          elevation={0}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1d-header"
          >
            <p>
              <ShoppingCartOutlinedIcon
                style={{ fontSize: '14px', marginTop: '4px' }}
              />
            </p>
            <Typography>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Products
              </Link>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '14px',
            }}
          >
            {[
              'Products',
              'Products Bulk Upload',
              'Digital Products',
              'Products Reviews',
            ].map((item) => (
              <li key={item} style={{ listStyleType: 'circle' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                  }}
                  to={`/auth-seller/${item.replaceAll(' ', '-').toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      {/***Uploaded Files */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <FaRegFolderOpen
                style={{
                  transform: 'rotate(90deg)',
                  fontSize: '14px',
                  marginTop: '4px',
                }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/uploads"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Uploaded Files
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/***** Packages*/}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          elevation={0}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1d-header"
          >
            <p>
              <ShoppingCartOutlinedIcon
                style={{ fontSize: '14px', marginTop: '4px' }}
              />
            </p>
            <Typography>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Packages
              </Link>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '14px',
            }}
          >
            {['Packages', 'Packages Purchase'].map((item) => (
              <li key={item} style={{ listStyleType: 'circle' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                  }}
                  to={`/auth-seller/${item.replaceAll(' ', '-').toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      {/****Coupon */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <CiBullhorn
                style={{
                  fontSize: '14px',
                  marginTop: '4px',
                }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/coupon"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Coupon
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/***Wholesale */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <FaLuggageCart
                style={{
                  fontSize: '14px',
                  marginTop: '4px',
                }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/wholesale"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Wholesale Products
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/***Auction */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          elevation={0}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1d-header"
          >
            <p>
              <GiGavel style={{ fontSize: '14px', marginTop: '4px' }} />
            </p>
            <Typography>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Auction
              </Link>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: '14px',
            }}
          >
            {['All Auction Products', 'Auction Product Orders'].map((item) => (
              <li key={item} style={{ listStyleType: 'circle' }}>
                <Link
                  style={{
                    textDecoration: 'none',
                  }}
                  to={`/auth-seller/${item.replaceAll(' ', '-').toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      {/***POS Manager */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <FaxOutlinedIcon style={{ fontSize: '14px', marginTop: '2px' }} />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/pos"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                POS Manager
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Orders */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <FaRegMoneyBillAlt
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/orders"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Orders
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/***ReFund */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <AiOutlineBackward
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/refund"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Received Refund Request
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Shop Setting */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <SettingsOutlinedIcon
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/shop"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Shop Settings
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Payment History */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <HistoryIcon style={{ fontSize: '14px', marginTop: '2px' }} />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/payment-history"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Payment History
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Money Withdraw */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <FaMoneyBillWave style={{ fontSize: '14px', marginTop: '2px' }} />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/withdraw"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Money Withdraw
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Commission History */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <NoteAddOutlinedIcon
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/commsision-history"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Commission History
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Conversations */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <CgComment
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/conversations"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Conversations
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Product Queries */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <AiOutlineQuestionCircle
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/queries"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Product Queries
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      {/*****Support Ticket */}
      <div>
        <Accordion
          style={{ backgroundColor: 'inherit' }}
          expanded={false}
          elevation={0}
        >
          <AccordionSummary>
            <p>
              <DiAtom
                style={{ fontSize: '14px', marginTop: '2px' }}
              />
            </p>
            <Typography component="p" variant="div">
              <Link
                to="/auth-seller/ticket"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '4px',
                  fontSize: '14px',
                }}
              >
                Support Ticket
              </Link>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
};
