import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
  // useHistory allows you to navigate to new uri or go back
  const history = useHistory();

  const handleClick = (location) => {
    props.onSubmit(location);
    history.push('/results');
  }

  return (
    <div>
      {/* Imported component for using Google Places autocomplete in our search bar */}
      <GooglePlacesAutocomplete
        placeholder="Search for your address..."
        onSelect={(location) => { handleClick(location) }}
        apiKey={props.apiKey}
      />
    </div>
  )
};

export default Search;