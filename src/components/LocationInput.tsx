import { Input } from "antd";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationInput: React.FC<{
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ location, setLocation }) => {
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
        onChange={(address) => setLocation(address)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <div>
              <Input
                {...getInputProps({
                  placeholder: "Enter location...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map((suggestion) => {
                  return (
                    <div {...getSuggestionItemProps(suggestion)}>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationInput;
