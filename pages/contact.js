import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Contactez-moi</h1>
        <p>Email : chaabane.safa95@gmail.com</p>
      </main>
    </div>
  );
}
