import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { SwitchUI } from './Switch';

export default function BasicCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 150 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            POS Activation for Seller
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <SwitchUI />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
