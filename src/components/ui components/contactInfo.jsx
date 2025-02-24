import { Divider } from '@mui/material';
import { Heading, Content, ListItem, Details } from './quickLinks';

export const ContactInfo = () => {
  return (
    <Content>
      <Heading label="div" component="h4">
        CONTACT INFO
      </Heading>
      <Divider
        style={{ color: 'white', background: 'gray', marginTop: '1rem' }}
      />
      <Details>
        <ListItem>
          <p style={{ marginBottom: '3px', opacity: '0.5' }}>Address:</p>
          <p>Demo</p>
        </ListItem>
        <ListItem>
          <p style={{ marginBottom: '4px', opacity: '0.5' }}>Phone:</p>
          <p>123456789</p>
        </ListItem>
        <ListItem>
          <p style={{ marginBottom: '3px', opacity: '0.5' }}>Email:</p>
          <p>demo.example@gmail.com</p>
        </ListItem>
      </Details>
    </Content>
  );
};
