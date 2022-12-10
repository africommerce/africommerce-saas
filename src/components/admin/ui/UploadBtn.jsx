<<<<<<< HEAD
import Button from '@mui/material/Button';

export default function UploadButtons({ children, style }) {
  return (
    <Button style={style} variant="contained" component="label">
      {children}
      <input hidden accept="pdf/*" multiple type="file" />
    </Button>
  );
}
=======
import Button from '@mui/material/Button';

export default function UploadButtons({ children, style }) {
  return (
    <Button style={style} variant="contained" component="label">
      {children}
      <input hidden accept="pdf/*" multiple type="file" />
    </Button>
  );
}
>>>>>>> 72cc9905769d7d18cc04636286c0cd9212b63391
