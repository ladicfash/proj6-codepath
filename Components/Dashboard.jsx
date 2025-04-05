import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.seatgeek.com/2/events', {
        params: {
          client_id: import.meta.env.VITE_SEATGEEK_CLIENT_ID
        }
      });
      setEvents(response.data.events);
    };

    fetchData();
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    event.genre.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Live Events Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Genres</option>

      </select>
      <div>
        <p>Total events: {events.length}</p>
      </div>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.venue.name}</p>
            <p>{event.datetime_local}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
