import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const GoogleIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
  >
    <defs>
    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
    </defs>
    <clipPath id="b"><use xlinkHref="#a" overflow="visible"/>
    </clipPath>
    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/>
    <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
  </svg>
);

const SocialButton = ({ label, type, className = '', disabled }) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <GitHubIcon className='text-black' />;
      case 'google':
        return <GoogleIcon />;
      case 'facebook':
        return <FacebookIcon className='text-blue-500' />;
      case 'email':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  return (
    <Button
      className={`bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-200 space-x-2 content-center justify-start align-center normal-case w-1/2 text-black my-1 ${className}`}
      variant='outlined'
      disabled={disabled}
    >
      {getIcon()}<span>{label}</span>
    </Button>
  );
};

SocialButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['github', 'google', 'facebook', 'email']).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SocialButton;
