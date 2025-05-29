// src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Team {
  name: string;
}

interface Match {
  id: number;
  utcDate: string;
  homeTeam: Team;
  awayTeam: Team;
}

const API_URL = 'http://localhost:5000/api/upcoming-matches';

const App: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<Match[]>(API_URL);
      setMatches(res.data);
    } catch (err) {
      setError('Failed to load matches. Please try again.');
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', padding: 20 }}>Loading matches...</p>;

  if (error)
    return (
      <div style={{ textAlign: 'center', padding: 20, color: 'red' }}>
        <p>{error}</p>
        <button onClick={fetchMatches}>Try Again</button>
      </div>
    );

  if (matches.length === 0) return <p style={{ textAlign: 'center', padding: 20 }}>No upcoming matches found.</p>;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Upcoming Soccer Matches</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {matches.map(({ id, homeTeam, awayTeam, utcDate }) => (
          <li
            key={id}
            style={{
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: '#f9f9f9',
              borderRadius: 6,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 4 }}>
              {homeTeam.name} vs {awayTeam.name}
            </div>
            <div style={{ color: '#555', fontSize: '0.9rem' }}>
              {new Date(utcDate).toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
