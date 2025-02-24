import TextField from '@mui/material/TextField';

export const TextInput = (props) => {
  return (
    <TextField
      id="outlined-password-input"
      label={props.label || ''}
      type={props.type || 'password'}
      style={props.style}
      autoComplete="current-password"
    />
  );
};
