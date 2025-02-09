import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function InputSelect({ label, items, value, onChange, displayField}) {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      margin="normal"
      variant="outlined"
      fullWidth
    >
      {items && items.length > 0 ? (
        items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item[displayField]}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled>No options available</MenuItem>
      )}
    </TextField>
  );
}