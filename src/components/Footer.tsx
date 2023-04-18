import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Real Estate Listings. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
