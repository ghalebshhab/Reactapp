import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Snack({Open,Text}) {
 


  return (
    <div>
      <Snackbar open={Open} autoHideDuration={3000} defaultValue={Text}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {Text}
        </Alert>
      </Snackbar>
    </div>
  );
}
