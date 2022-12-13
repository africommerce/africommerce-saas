import Button from '@mui/material/Button';

export default function UploadButtons({ children, style }) {
  return (
    <Button style={style} variant="contained" component="label">
      {children}
      <input hidden accept="pdf/*" multiple type="file" />
    </Button>
  );
}
