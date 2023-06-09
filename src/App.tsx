import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './style.css';

export default function App() {
  return (
    <FormControl>
      <FormLabel>Test formcontrol with checkbox </FormLabel>
      <Checkbox />
    </FormControl>
  );
}
