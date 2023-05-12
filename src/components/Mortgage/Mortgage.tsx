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
  backgroundColor = 'dcdcb63b',
}) => {
  

  const iframeSrc = `https://www.mortgagecalculator.net/embeddable/v2/?size=${size}&textColor=${textColor}&backgroundColor=${backgroundColor}`;

  return (
    <div className="mortgage-container">
      <iframe
        src={iframeSrc}
        width="100%"
        height="330"
        frameBorder="0"
        scrolling="no"
        title="Mortgage Calculator"
      ></iframe>
      <a
        className="mortgage-link"
        href="https://www.mortgagecalculator.net"
      >
        Powered By www.MortgageCalculator.net
      </a>
    </div>
  );
};

export default Mortgage;
