import styles from './UserCard.module.css';

export default function UserCard({ name, age, weight, height, profession }) {
  return (
    <div className={`card ${styles.userCard}`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Age:</strong> {age} <br />
          <strong>Weight:</strong> {weight}kg <br />
          <strong>Height:</strong> {height}cm <br />
          <strong>Profession:</strong> {profession}
        </p>
      </div>
    </div>
  );
}
