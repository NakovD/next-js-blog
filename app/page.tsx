import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding React",
    excerpt: "A deep dive into the world of React and its features.",
    date: "October 10, 2024",
    author: "John Doe",
  },
  {
    title: "CSS Tricks for Modern Web Development",
    excerpt: "Learn some useful CSS tricks to enhance your web design.",
    date: "October 5, 2024",
    author: "Jane Smith",
  },
  {
    title: "Getting Started with Tailwind CSS",
    excerpt: "A beginner’s guide to using Tailwind CSS in your projects.",
    date: "September 30, 2024",
    author: "Alice Johnson",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="mt-6" />
      <section>
        <h1 className="text-center text-xl text-blue-400">
          Welcome to [My Blog Name]
        </h1>
        <div className="mt-8" />
        <p className="max-w-lg ml-64">
          Your go-to destination for developer insights, tips, and discoveries.
          Here, we dive deep into topics that inspire, inform, and ignite
          curiosity for developers of all levels. Whether you&apos;re looking
          for coding tutorials, career advice, or the latest trends in software
          development, you&apos;ll find something that speaks to you.
        </p>
      </section>
      <section>
        <h2>Explore some of our best articles</h2>
        <div className="mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
