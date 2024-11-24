export default function HomePage() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to Workout App</h1>
      <p className="text-center">Track your workouts and maintain a healthy lifestyle.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calendar2-check text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="card-title mt-2">Plan Workouts</h5>
              <p className="card-text">Schedule and plan your workout sessions with ease.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-graph-up-arrow text-success" style={{ fontSize: '2rem' }}></i>
              <h5 className="card-title mt-2">Track Progress</h5>
              <p className="card-text">Monitor your fitness journey with detailed statistics.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-person-circle text-warning" style={{ fontSize: '2rem' }}></i>
              <h5 className="card-title mt-2">Update Profile</h5>
              <p className="card-text">Keep your personal details up-to-date.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
