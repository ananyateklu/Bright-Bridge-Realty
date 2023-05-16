import React from 'react';

import './Mortgage.css';

interface MortgageProps {
  size?: number;
  textColor?: string;
  backgroundColor?: string;
}

const Mortgage: React.FC<MortgageProps> = ({
  size = 1,
  textColor = '5d1a91',
  backgroundColor = 'e7e7e7',
}) => {
  

  const iframeSrc = `https://www.mortgagecalculator.net/embeddable/v2/?size=${size}&textColor=${textColor}&backgroundColor=${backgroundColor}`;

  return (
    <div className="mortgage-container">
      <iframe
        src={iframeSrc}
        width="100%"
        height="330"
        frameBorder="0"
        scrolling="yes"
        title="Mortgage Calculator"
      ></iframe>
    </div>
  );
};

export default Mortgage;
