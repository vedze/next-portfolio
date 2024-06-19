import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center fixed top-0 right-0 h-full w-1/5 p-4">
      <div className="absolute top-0 w-full text-center text-xs text-gray-300 p-2">
        last updated: 2024 / 06 / 19
      </div>
      <nav className="flex flex-col text-right gap-10 w-full pr-8">
        <Link href="/">Main</Link>
        <Link href="/about">Introduction</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact & Feedback</Link>
      </nav>
      <div className="absolute bottom-0 w-full text-center text-sm pb-4 ">
        <div className="text-right pr-8">
          📞 010-0000-0000
          <br />
          📧 email@naver.com
        </div>
      </div>
    </header>
  );
}
