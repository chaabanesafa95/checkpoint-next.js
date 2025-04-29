import Header from '../components/Header';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>À propos de moi</h1>
        <p>Je m'appelle Safa Chaabane et je suis développeur Fullstack.</p>
      </main>
    </div>
  );
}
