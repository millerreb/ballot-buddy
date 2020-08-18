import React from 'react';
import { Button, Box } from '@material-ui/core';

const Referendum = ({ referendumInfo: {title, subtitle, infoUrl }}) => {
  return (
    <Box>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
      <Button 
        variant="contained" 
        size="small" 
        color="secondary" 
        href={ infoUrl } 
      >
        More Info
      </Button>
    </Box>
  );
};

export default Referendum;