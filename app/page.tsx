import Link from "next/link";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getPosts() {
  return await prisma.post.findMany();
}

const HomePage = async () => {
  const posts = await getPosts();

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
      <div className="mt-6" />
      <section>
        <p>Explore Our Categories</p>{" "}
        <ul>
          <li className="list-disc">
            Web Development: Best practices, frameworks, and modern web trends.
          </li>
          <li className="list-disc">
            Backend & APIs: Insights into server-side programming and API
            design.
          </li>
          <li className="list-disc">
            DevOps: Tools, workflows, and automation for seamless deployments.
          </li>
          <li className="list-disc">
            Career Growth: Tips for advancing your career as a developer.
          </li>
        </ul>
      </section>
      <div className="mt-6" />
      <section>
        Why Follow Us? We believe in sharing content that resonates, connects,
        and helps developers grow. With new posts every week, we aim to keep
        your skills sharp and your knowledge up-to-date. Join our growing
        community and let&apos;s explore the world of development, one post at a
        time.
      </section>
      <div className="mt-6" />
      <section className="bg-indigo-400 p-8 rounded-xl">
        <h2 className="text-lg text-center">
          Stay Updated Don&apos;t miss out!
        </h2>
        <div className="mt-2" />
        <p className="max-w-md mx-auto text-center">
          Subscribe to our newsletter to receive the latest updates straight to
          your inbox.
        </p>
        <div className="mt-3" />
        <div className="flex gap-x-6 justify-center">
          <label className="flex flex-col w-full max-w-lg">
            <span className="block">Your email address</span>
            <div className="mt-1" />
            <input
              type="email"
              className="p-1 bg-pink-100 rounded text-gray-600 w-full"
              required
              min={8}
            />
          </label>
          <button className="self-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Subscribe!
          </button>
        </div>
      </section>
      <div className="mt-6" />
      <section>
        <h2>Explore some of our best articles</h2>
        <div className="mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                    {post.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.description}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6" />
    </div>
  );
};

export default HomePage;
