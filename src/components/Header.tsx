import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">hello</Link>
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
