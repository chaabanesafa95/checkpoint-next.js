import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', background: '#eee' }}>
      <nav>
        <Link href="/">Accueil</Link> |{' '}
        <Link href="/about">À propos</Link> |{' '}
        <Link href="/projects">Projets</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
