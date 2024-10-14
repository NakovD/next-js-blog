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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <article key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-gray-500">{post.excerpt}</p>
          <div className="mt-4 text-gray-400 text-sm">
            <span>{post.date}</span> | <span>{post.author}</span>
          </div>
          <Link
            href="/blog"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Read more
          </Link>
        </article>
      ))}
    </section>
  );
};

export default HomePage;
