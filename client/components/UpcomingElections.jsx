import React from 'react';
import ElectionInfo from './ElectionInfo';
import OfficeContests from './OfficeContests';
import ReferendaContests from './ReferendaContests';

const UpcomingElections = (
  { electionData: 
    { electionName, 
      electionDay, 
      pollingLocations, 
      officeContests, 
      referendaContests 
    }
  }) => {
  console.log(electionName);
  return (
    <React.Fragment>
      <ElectionInfo 
        electionName={ electionName }
        electionDay={ electionDay }
        pollingLocations={ pollingLocations } 
      />
      <OfficeContests contests={ officeContests } />
      <ReferendaContests contests={ referendaContests } />
    </React.Fragment>  
  );
};

export default UpcomingElections;