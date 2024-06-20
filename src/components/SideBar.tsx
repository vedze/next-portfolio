import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col items-center h-screen p-2 bg-orange-100">
      <div className="text-center text-xs text-gray-500">
        last updated: 2024.06.20
      </div>
      <nav className="flex flex-col flex-1 justify-center px-1 gap-10 text-right">
        <Link href="/">Intro</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact & FeedBack</Link>
      </nav>
      <div className="text-center text-sm">
        📞 010-0000-0000
        <br />
        📧 email@naver.com
      </div>
    </div>
  );
}
