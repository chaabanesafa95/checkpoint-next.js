import Header from '../components/Header';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Mes Projets</h1>
        <ul>
          <li>Portfolio Next.js</li>
          <li>Application météo</li>
          <li>Site e-commerce</li>
        </ul>
      </main>
    </div>
  );
}
