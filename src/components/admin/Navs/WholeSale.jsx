import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { CircleOutlined, KeyboardArrowRight } from '@mui/icons-material';
import { Divider } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.3rem;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    color: gray;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px;
    &:hover {
      background: rgb(26, 26, 39);
      color: white;
    }
  }
`;
export default function WholeSaleMenu({ title, icon, items }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        style={{ background: 'rgb(20,20,35)', color: 'gray' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          style={{ background: 'rgb(20,20,35)', color: 'gray' }}
          expandIcon={<KeyboardArrowRight style={{ color: 'gray' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: '100%', flexShrink: 0 }}
            style={{
              display: 'flex',
              gap: '5px',
              fontSize: '12px',
              alignItems: 'center',
            }}
          >
            {' '}
            <span>{icon}</span> {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MenuList>
              {items.map((list) => (
                <>
                  <Link
                    key={list.name}
                    style={{
                      textDecoration: 'none',
                      color: 'gray',
                    }}
                    to={list.link}
                  >
                    <li
                      style={{
                        display: 'flex',
                        gap: '3px',
                        padding: '10px',
                        fontWeight: '600',
                      }}
                    >
                      {' '}
                      <CircleOutlined fontSize="small" />
                      {list.name}
                    </li>
                  </Link>
                  {/* <Outlet /> */}
                </>
              ))}
            </MenuList>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider style={{ background: 'gray' }} />
    </div>
  );
}
