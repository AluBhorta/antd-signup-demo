import { Input } from "antd";
import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const LocationInput: React.FC<{
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}> = ({ location, setLocation }) => {
  return (
    <>
      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={setLocation}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <>
            <div>
              <Input
                {...getInputProps({
                  placeholder: "Enter location...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map((suggestion) => (
                  <div {...getSuggestionItemProps(suggestion)}>
                    <span>{suggestion.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationInput;
