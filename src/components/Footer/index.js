import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SocialIcon network="twitter" style={{margin: '5px'}} />
      <SocialIcon network="facebook" style={{margin: '5px'}}/>
      <SocialIcon network="instagram" style={{margin: '5px'}} />
      <SocialIcon network="youtube" style={{margin: '5px'}}/>
    </div>
  )
}