import React, { useState, useEffect } from 'react';
import Contest from './Contest';
import ResultsSectionHeader from './ResultsSectionHeader';
import Box from '@material-ui/core/Box';

const OfficeContests = ({ contests: officeContests }) => {
  console.log(officeContests);
  // create state variables to store user selections
  const [selections, setSelections] = useState({});

  // define function to update state and classname on submit
  const onSelection = (e) => {
    const selectionUpdate = { [e.target.officeName]: e.target.candidateName }
    setSelections(Object.assign(selections, selectionUpdate));
    //TO-DO: Also need to toggle classname of associated candidate's name
  };
  
  // generate list of contests to display
  const contestList = [];
  officeContests.forEach((contest, index) => contestList.push(
    <Contest 
      key={ index } 
      officeName={ contest.office }
      contestInfo={ contest }
      onSelection={ onSelection } 
    />));

  return (
    <Box className="officecontestsBox">
      <ResultsSectionHeader text="Candidates for Office" />
      { contestList }
    </Box>
  );
};

export default OfficeContests;
