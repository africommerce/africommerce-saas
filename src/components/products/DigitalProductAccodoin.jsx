import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from '@mui/material';
import { DeleteOutline, Download, EditOutlined } from '@mui/icons-material';
import { useState } from 'react';

export default function DigitalProductAccodoin() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Anthem [Online Game Code]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>#</span>
              <span style={{ width: '80%' }}>{1}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Added By</span>
              <span style={{ width: '80%' }}>Seller</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Photo</span>
              <span style={{ width: '80%' }}>
                <img src="I" alt="xcx" />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Base Price</span>
              <span style={{ width: '80%' }}>${(233).toFixed(2)}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Todays Deal</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Published</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Featured</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Options</span>
              <span
                style={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <EditOutlined style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(253,227,233)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(241,76,109)',
                  }}
                >
                  <DeleteOutline style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <Download style={{ fontSize: '13px' }} />
                </span>
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            FIFA 22 Standard - PC [Online Game Code]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>#</span>
              <span style={{ width: '80%' }}>{1}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Added By</span>
              <span style={{ width: '80%' }}>Seller</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Photo</span>
              <span style={{ width: '80%' }}>
                <img src="I" alt="xcx" />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Base Price</span>
              <span style={{ width: '80%' }}>${(233).toFixed(2)}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Todays Deal</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Published</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Featured</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Options</span>
              <span
                style={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <EditOutlined style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(253,227,233)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(241,76,109)',
                  }}
                >
                  <DeleteOutline style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <Download style={{ fontSize: '13px' }} />
                </span>
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Adobe Premiere Elements 2022 | PC/Mac Disc
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>#</span>
              <span style={{ width: '80%' }}>{1}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Added By</span>
              <span style={{ width: '80%' }}>Seller</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Photo</span>
              <span style={{ width: '80%' }}>
                <img src="I" alt="xcx" />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Base Price</span>
              <span style={{ width: '80%' }}>${(233).toFixed(2)}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Todays Deal</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Published</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Featured</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Options</span>
              <span
                style={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <EditOutlined style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(253,227,233)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(241,76,109)',
                  }}
                >
                  <DeleteOutline style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <Download style={{ fontSize: '13px' }} />
                </span>
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Microsoft 365 Personal | 12-Month Subscription, 1 person| Premium
            Office Apps
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>#</span>
              <span style={{ width: '80%' }}>{1}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Added By</span>
              <span style={{ width: '80%' }}>Seller</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Photo</span>
              <span style={{ width: '80%' }}>
                <img src="I" alt="xcx" />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Base Price</span>
              <span style={{ width: '80%' }}>${(233).toFixed(2)}</span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Todays Deal</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Published</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Featured</span>
              <span style={{ width: '80%' }}>
                <Switch />
              </span>
            </div>
            <div
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <span style={{ width: '20%' }}>Options</span>
              <span
                style={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <EditOutlined style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(253,227,233)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(241,76,109)',
                  }}
                >
                  <DeleteOutline style={{ fontSize: '13px' }} />
                </span>
                <span
                  style={{
                    background: 'rgb(254,235,218)',
                    width: '30px',
                    display: 'flex',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'rgb(247,123,11)',
                    cursor: 'pointer',
                  }}
                >
                  <Download style={{ fontSize: '13px' }} />
                </span>
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
