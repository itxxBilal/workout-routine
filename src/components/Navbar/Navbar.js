import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg bg-dark navbar-dark ${styles.navbar}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Workout
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
