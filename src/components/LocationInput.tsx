import { Input } from "antd";
import { GoogleApiWrapper } from "google-maps-react";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationInput: React.FC<{}> = () => {
  const [location, setLocation] = useState("");

  const handleChange = (address: string) => {
    setLocation(address);
  };

  const handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <PlacesAutocomplete
        value={location}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input
              {...getInputProps({
                placeholder: "Enter location...",
                className: "location-search-input",
              })}
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}

              {suggestions.map((suggestion) => {
                return (
                  <div {...getSuggestionItemProps(suggestion)}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  libraries: ["places"],
})(LocationInput);
