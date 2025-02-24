import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const AlertMessage = ({ severity, message }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{severity}</AlertTitle>
        {message} —{' '}
        <strong>{severity === 'success' ? '' : 'check it out!'}</strong>
      </Alert>
    </Stack>
  );
};
