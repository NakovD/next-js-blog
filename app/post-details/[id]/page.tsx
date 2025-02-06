import { db } from "@/server/db";

const defaultImage =
  "https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const post = await db.post.findUniqueOrThrow({
    where: {
      id: Number((await params).id),
    },
  });

  return (
    <>
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          {post.updatedAt.toDateString()}{" "}
          <span className="text-gray-900">/</span> GETTING STARTED
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {post.name}
        </h1>
      </div>

      <div
        className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          backgroundImage: `url('${post.thumbnailUrl ?? defaultImage}')`,
          height: "75vh",
        }}
      ></div>

      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            <p className="text-2xl md:text-3xl mb-5">
              Welcome fellow{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://www.tailwindcss.com"
              >
                Tailwind CSS
              </a>{" "}
              and{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://www.ghost.org"
              >
                Ghost
              </a>{" "}
              fan. This starter template is an attempt to replicate the default
              Ghost theme{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://demo.ghost.io/welcome"
              >
                &quot;Casper&quot;
              </a>{" "}
              using Tailwind CSS and vanilla Javascript.
            </p>

            <p className="py-6">{post.description}</p>

            <p className="py-6">
              Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
              purus, in mattis tortor sollicitudin pretium. Phasellus at diam
              posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
              diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
              condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
              turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
              rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
              molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
              molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
              odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Duis nec nulla eget sem dictum elementum.
            </p>

            <ol>
              <li className="py-3">
                Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
                sit amet tellus scelerisque tortor semper posuere.
              </li>
              <li className="py-3">
                Morbi varius posuere blandit. Praesent gravida bibendum neque
                eget commodo. Duis auctor ornare mauris, eu accumsan odio
                viverra in. Proin sagittis maximus pharetra. Nullam lorem
                mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                ornare vulputate, pretium nec felis.
              </li>
              <li className="py-3">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
                tristique in risus ac, tristique rutrum velit. Mauris accumsan
                tempor felis vitae gravida. Cras egestas convallis malesuada.
                Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
                suscipit, elementum odio et, consequat tellus.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Crocodiles are easy. They try to kill and eat you. People are
              harder. Sometimes they pretend to be your friend first.
              <br /> - Steve Irwin
            </blockquote>

            <p className="py-6">What&apos;s the output?</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              <code className="break-words whitespace-pre-wrap">
                let a = 3; let b = new Number(3); let c = 3; console.log(a ==
                b); console.log(a === b); console.log(b === c);
              </code>
            </pre>
          </div>

          <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
              Subscribe to Ghostwind CSS
            </h2>
            <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
              Get the latest posts delivered right to your inbox
            </h3>
            <div className="w-full text-center pt-4">
              <form action="#">
                <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex w-full items-center font-sans p-8 md:p-24">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <div className="flex-1">
              <p className="text-base font-bold text-base md:text-xl leading-none">
                Ghostwind CSS
              </p>
              <p className="text-gray-600 text-xs md:text-base">
                Tailwind CSS version of Ghost&apos;s Casper theme by{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindtoolbox.com"
                >
                  TailwindToolbox.com
                </a>
              </p>
            </div>
            <div className="justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
