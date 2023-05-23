import React from 'react';

import './Mortgage.css';

interface MortgageProps {
  size?: number;
  textColor?: string;
  backgroundColor?: string;
}

const Mortgage: React.FC<MortgageProps> = ({
  size = 1,
  textColor = 'black',
  backgroundColor = '9696961a',
}) => {
  

  const iframeSrc = `https://www.mortgagecalculator.net/embeddable/v2/?size=${size}&textColor=${textColor}&backgroundColor=${backgroundColor}`;

  return (
    <div className="mortgage-container">
      <iframe
        src={iframeSrc}
        width="100%"
        height="330"
        
        scrolling="yes"
        title="Mortgage Calculator"
        style={{ borderRadius: '10px' }}
      ></iframe>
    </div>
  );
};

export default Mortgage;
