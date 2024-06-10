
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = ({ cityId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/cities/${cityId}/events`)
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, [cityId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <List>
      {events.map(event => (
        <ListItem button component={Link} to={`/event/${event.id}`} key={event.id}>
          <ListItemText primary={event.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
