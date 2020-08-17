import React from 'react';
import Candidate from './Candidate';
import Box from '@material-ui/core/Box';

const Contest = ({ contestName, contestInfo: { office, candidates } }) => {
  
  const candidateList = [];
  candidates.forEach((candidate, index) => { candidateList.push(
    <Candidate 
      key={ index }
      contestName={ contestName }
      candidateInfo={ candidate } 
    />) });
  
  return (
    <Box className="contestBox">
      <h1 className="contestHeader">{ office }</h1>
      { candidateList }
    </Box>
  );
};

export default Contest;