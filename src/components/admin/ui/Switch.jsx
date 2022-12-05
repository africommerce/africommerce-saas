import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const SwitchUI = (props) => {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
};
