export default function Dashboard() {
    return (
      <div className="container mt-4">
        <h1 className="text-center">Dashboard</h1>
        <p className="text-center">Your recent activities and workout progress.</p>
        <ul className="list-group">
          <li className="list-group-item">Completed 5km run</li>
          <li className="list-group-item">30 minutes of strength training</li>
          <li className="list-group-item">10 minutes of yoga</li>
        </ul>
      </div>
    );
  }
  