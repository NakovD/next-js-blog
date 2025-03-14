import Link from "next/link";
import { HeaderLink } from "./HeaderLink";

export const Header = () => (
  <header>
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <Link
            className="flex text-white text-base no-underline hover:text-white hover:no-underline"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334484"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-squirrel"
            >
              <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
              <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
              <path d="M15.2 22a3 3 0 0 0-2.2-5" />
              <path d="M18 13h.01" />
            </svg>{" "}
            <span className="hidden w-0 md:w-auto md:block pl-1">
              Ghostwind CSS
            </span>
          </Link>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <HeaderLink text="Home" href="/" />
            <HeaderLink text="Add Post" href="/add-post" />
            <HeaderLink text="Link" href="/" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
