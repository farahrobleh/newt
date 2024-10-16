import React, { useEffect } from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 20px 0;
  text-align: center;
  min-height: 100px; // Adjust based on your ad size
`;

const AdSense = ({ adSlot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <AdContainer>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-6023600789342619" // Replace with your AdSense publisher ID
           data-ad-slot={adSlot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </AdContainer>
  );
};

export default AdSense;