import React from 'react';

const ResultsSectionHeader = (props) => {
  return (
    <div>
      <h1 className="sectionHeader">{ props.text }</h1>
      <img src='../client/assets/section-divider.png' />
    </div>
  );
};

export default ResultsSectionHeader;