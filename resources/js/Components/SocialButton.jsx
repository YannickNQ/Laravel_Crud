import React from 'react';

import { Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialButton = ({ label, type, className = '', disabled}) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <GitHubIcon />;
      case 'google':
        return <GoogleIcon />;
      case 'facebook':
        return <FacebookIcon />;
      default:
        return null;
    }
  };

  return (
    <Button 
      className={ className }
      disabled={disabled} 
      startIcon={getIcon()}>
        {label}
    </Button>
  );
};

export default SocialButton;
