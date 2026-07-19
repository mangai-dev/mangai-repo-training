import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="display-6">OctoFit Tracker</h1>
        <p className="text-muted">
          Multi-tier fitness dashboard backed by the OctoFit API.
        </p>
        <p className="small text-muted">
          Define VITE_CODESPACE_NAME in .env.local to use the Codespaces API URL.
        </p>
      </header>

      <nav className="nav nav-pills mb-4">
        <NavLink className="nav-link" to="/">Overview</NavLink>
        <NavLink className="nav-link" to="/users">Users</NavLink>
        <NavLink className="nav-link" to="/teams">Teams</NavLink>
        <NavLink className="nav-link" to="/activities">Activities</NavLink>
        <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="row g-3">
              <div className="col-md-6"><Users /></div>
              <div className="col-md-6"><Teams /></div>
              <div className="col-md-6"><Activities /></div>
              <div className="col-md-6"><Leaderboard /></div>
              <div className="col-md-6"><Workouts /></div>
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
