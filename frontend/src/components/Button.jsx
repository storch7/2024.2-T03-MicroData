import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, onClick, type = 'button', variant='contained', color='primary' }) => {
    return (
      <Button variant={variant} color={color} type={type} onClick={onClick} style={variant === 'contained' ? {backgroundColor: color, color: '#fff'} : {border: `1px solid ${color}`, color: color}}>
        {text}
      </Button>
    );
  };  

export default CustomButton;