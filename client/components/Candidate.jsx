import React from 'react';
import { Button, Box } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Candidate = ({ candidateInfo: { name, party, candidateUrl, channels } }) => {
  
  const contactChannels = {};
  if (channels && channels.length > 0){ 
    channels.forEach((channel) => contactChannels[channel.type] = channel.id);
  }

  return (
    <Box className="candidateBox">
      <h3>{ name }</h3>
      <h4>Party: { party }</h4>
      <Button 
        variant="contained" 
        size="small" 
        color="secondary" 
        href={ candidateUrl } 
      >
        Website
      </Button>
      { (Object.keys(contactChannels).length > 0 && contactChannels.Facebook) && 
        <a href={contactChannels.Facebook}><FacebookIcon  color="primary" style={{ fontSize: "40px" }} /></a>
      }
      { (Object.keys(contactChannels).length > 0 && contactChannels.Twitter) && 
        <a href={contactChannels.Twitter}><TwitterIcon  color="primary" style={{ fontSize: "40px" }} /></a>
      }
      { (Object.keys(contactChannels).length > 0 && contactChannels.YouTube) && 
        <a href={contactChannels.YouTube}><YouTubeIcon  color="primary" style={{ fontSize: "40px" }} /></a>
      }
    </Box>
  );
};

export default Candidate;