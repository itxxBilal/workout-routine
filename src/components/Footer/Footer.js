import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center py-3">
        <p>© 2024 Workout. All Rights Reserved.</p>
        <div className={styles.socialIcons}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
