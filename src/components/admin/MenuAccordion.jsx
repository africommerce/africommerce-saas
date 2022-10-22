import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Divider } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    color: white;
    border-radius: 5px;
    padding: 5px;
    &:hover {
      background: rgb(26, 26, 39);
    }
  }
`;
export default function MenuAccordions({ list, title, icon }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        style={{ background: 'rgb(20,20,35)', color: 'white' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          style={{ background: 'rgb(20,20,35)', color: 'white' }}
          expandIcon={<KeyboardArrowRight />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: '100%', flexShrink: 0 }}
            style={{ display: 'flex', gap: '5px', fontSize: '12px' }}
          >
            {' '}
            <span>{icon}</span> {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MenuList>
              {list.map((list) => (
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  to="/admin"
                >
                  <li>{list}</li>
                </Link>
              ))}
            </MenuList>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider style={{ background: 'gray' }} />
    </div>
  );
}
