import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import ResultsSectionHeader from './ResultsSectionHeader';
import Referendum from './Referendum';

const ReferendaContests = ({ contests: referendaContests }) => {
  console.log(referendaContests);

  return (
    <Box >
      <ResultsSectionHeader text="Referenda" />
      { // generate list of referenda to display
        referendaContests.map((contest, index) =>
        (<Referendum key={ index } referendumInfo={ contest } />)
        )
      }
    </Box>
  );
};

export default ReferendaContests;