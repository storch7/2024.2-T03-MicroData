import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, onClick, type = 'button', variant='contained', color='primary' }) => {
    return (
      <Button 
        variant={variant} 
        type={type} 
        onClick={onClick} 
        sx={{
          ...(variant === 'contained' ? {
            backgroundColor: color,
            color: '#fff',
            '&:hover': {
              backgroundColor: color,
              opacity: 0.9
            }
          } : {
            border: `1px solid ${color}`,
            color: color,
            '&:hover': {
              borderColor: color,
              opacity: 0.9
            }
          })
        }}
      >
        {text}
      </Button>
    );
};

export default CustomButton;