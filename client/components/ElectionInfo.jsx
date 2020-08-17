import React from 'react';
import ResultsSectionHeader from './ResultsSectionHeader';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const ElectionInfo = ({ 
  electionName,
  electionDay,
  pollingLocations: [
    { address: 
      { locationName, 
        line1, 
        city, 
        state, 
        zip 
      }, 
      notes, 
      pollingHours 
    }
  ]
}) => {
  return (
    <Box id="upcomingElection">
      <ResultsSectionHeader text="Upcoming Election" />
      <Box id="electionDetails">
        <h2 className="electionName">{ electionName }</h2>
        <h2>{ new Date(electionDay).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</h2>
      </Box>
      <Box id="pollingLocation">
        <h3>Polling Place</h3>
        <p>{ locationName }</p>
        <p>{ line1 }</p>
        <p>{ city }, { state } { zip }</p>
        <p>Polling Hours: { pollingHours }</p>
        { notes && <p>Notes:<br />{ notes }</p> }
      </Box>
    </Box>
  );
};

export default ElectionInfo;