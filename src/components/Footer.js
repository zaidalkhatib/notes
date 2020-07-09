import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{color: '#00bfff'}}>Zaid Alkhatib. Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
