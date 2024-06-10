
import React from 'react';
import EventList from '../components/EventList.mjs';
import { useParams } from 'react-router-dom';

const CityPage = () => {
  const { cityId } = useParams();
  return (
    <div className="container">
      <h1>Events in {cityId}</h1>
      <EventList cityId={cityId} />
    </div>
  );
};

export default CityPage;
