export const StickyMenu = () => (
  <div
    id="header"
    className="bg-white fixed w-full z-10 top-0 hidden animated"
    style={{ opacity: ".95" }}
  >
    <div className="bg-white">
      <div className="flex flex-wrap items-center content-center">
        <div className="flex w-1/2 justify-start text-white font-extrabold">
          <a
            className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
            href="#"
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
          </a>
        </div>
        <div className="flex w-1/2 justify-end content-center">
          <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
            <span className="pr-2">Share this</span> 👉
          </p>
          <a
            className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
            href="https://twitter.com/intent/tweet?url=#"
            style={{ backgroundColor: "#33b1ff" }}
          >
            <svg
              className="fill-current text-white h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
            </svg>
          </a>
          <a
            className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
            style={{ backgroundColor: "#005e99" }}
          >
            <svg
              className="fill-current text-white h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div
      id="progress"
      className="h-1 bg-white shadow"
      style={{
        background:
          "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
      }}
    ></div>
  </div>
);
