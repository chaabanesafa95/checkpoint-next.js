import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Bienvenue sur mon Portfolio</h1>
        <Image src="/profile.jpg" alt="Photo de profil" width={150} height={150} />
        <p>Je suis développeur web passionné par Next.js</p>
      </main>
    </div>
  );
}
