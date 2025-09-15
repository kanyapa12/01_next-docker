import Image from "next/image";
import Attractions from "./components/Attractions"; // ✅ import component

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-gray-50">
      <main className="flex flex-col gap-10 items-center">
        {/* โลโก้ Next.js */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* ✅ แสดง attractions */}
        <Attractions />

        {/* Footer menu */}
        <footer className="flex gap-6 flex-wrap justify-center mt-10">
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </main>
    </div>
  );
}
