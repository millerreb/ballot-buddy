import React from 'react';
import Box from '@material-ui/core/Box';
import ResultsSectionHeader from './ResultsSectionHeader';
import Referendum from './Referendum';

const ReferendaContests = ({ contests: referendaContests }) => {
  // generate list of referenda to display
  const referendaList = [];
  referendaContests.forEach((contest, index) => {
    referendaList.push(<Referendum key={ index } referendumInfo={ contest } />);
  });

  return (
    <Box >
      <ResultsSectionHeader text="Referenda" />
      { referendaList }
    </Box>
  );
};

export default ReferendaContests;