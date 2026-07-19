import { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const apiBaseUrl = import.meta.env.VITE_CODESPACE_NAME
          ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
          : 'http://localhost:8000/api/workouts/';
        const response = await fetch(apiBaseUrl);
        if (!response.ok) {
          throw new Error('Unable to load workouts');
        }
        const data = await response.json();
        setWorkouts(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) return <p className="text-muted">Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Workouts</h2>
        <ul className="list-group list-group-flush">
          {workouts.map((workout) => (
            <li key={workout._id || workout.id} className="list-group-item">
              <strong>{workout.title}</strong> — {workout.difficulty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;
