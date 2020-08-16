import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { TextField } from '@material-ui/core'


const Search = (props) => {
  return (
    <form className="buddy-search">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  )
};

export default Search;