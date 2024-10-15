import { ReactNode } from "react";

type BlogLayoutProps = Readonly<{
  children: ReactNode;
}>;

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <>
    {children}
    <button
      className="btn-toggle-round scroll-top js-scroll-top"
      type="button"
      title="Scroll to top"
    >
      <svg
        className="progress-circle"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="cuurentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>
    </button>

    <div className="bg-gray-200">
      <div className="container w-full max-w-6xl mx-auto px-2 py-8">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 pb-12">
            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
              <a href="#" className="no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/_AjqGGafofE/400x200"
                  className="h-48 w-full rounded-t shadow-lg"
                />
                <div className="p-6 h-auto md:h-48">
                  <p className="text-gray-600 text-xs md:text-sm">
                    GETTING STARTED
                  </p>
                  <div className="font-bold text-xl text-gray-900">
                    Aperture Science
                  </div>
                  <p className="text-gray-800 font-serif text-base mb-5">
                    I’ll be honest, we’re throwing science at the wall here to
                    see what sticks. No idea what it’ll do. Probably nothing.
                    Best case scenario you might get some super powers. Worst
                    case, some tumors, which we’ll cut out.
                  </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 pb-12">
            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
              <a href="#" className="no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/_AjqGGafofE/400x200"
                  className="h-48 w-full rounded-t shadow"
                />
                <div className="p-6 h-auto md:h-48">
                  <p className="text-gray-600 text-xs md:text-sm">UNDERWATER</p>
                  <div className="font-bold text-xl text-gray-900">
                    Biolumini algae diatomeae ecology.
                  </div>
                  <p className="text-gray-800 font-serif text-base mb-5">
                    Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                    posuere et sit amet ligula.
                  </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">4 MIN READ</p>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 pb-12">
            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
              <a href="#" className="no-underline hover:no-underline">
                <img
                  src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                  className="h-48 w-full rounded-t shadow"
                />
                <div className="p-6 h-auto md:h-48">
                  <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                  <div className="font-bold text-xl text-gray-900">
                    What is life but a teardrop in the eye of infinity?
                  </div>
                  <p className="text-gray-800 font-serif text-base mb-5">
                    Mollis pretium integer eros et dui orci, lectus nec elit
                    sagittis neque. Dignissim ac nullam semper aliquet volutpat,
                    ut scelerisque.
                  </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BlogLayout;
