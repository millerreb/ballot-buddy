import React from 'react';
// import Autocomplete from 'react-google-autocomplete';
import { TextField } from '@material-ui/core'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';


const Search = (props) => {
  return (
    <div>
    <GooglePlacesAutocomplete
      // onSelect={console.log}
      placeholder="Search for your address..."
      onSelect={props.onAddressSubmit}
      // custom input field using Material UI
      // renderInput={(props) => (
      //   <div className="custom-wrapper">
      //     <TextField
      //     id="standard-full-width"
      //     label="Search for your address"
      //     style={{ margin: 0 }}
      //     fullWidth
      //     margin="normal"
      //       // Custom properties
      //       {...props}
      //     />
      //   </div>
      // )}
    />
  </div>
  )
};

export default Search;