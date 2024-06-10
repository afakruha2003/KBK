
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';

const CitySelector = () => {
  const history = useHistory();
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    if (city) {
      history.push(`/city/${city}`);
    }
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Select City</InputLabel>
      <Select value={city} onChange={handleChange} label="Select City">
        <MenuItem value="1">Istanbul</MenuItem>
        <MenuItem value="2">Ankara</MenuItem>
        <MenuItem value="3">Izmir</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Go
      </Button>
    </FormControl>
  );
};

export default CitySelector;
