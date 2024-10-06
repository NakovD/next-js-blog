import Link from "next/link";

type HeaderLink = Readonly<{ href: string; text: string }>;

export const HeaderLink = ({ text, href }: HeaderLink) => (
  <li className="mr-2">
    <Link className="inline-block text-indigo-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-2" href={href}>
      {text}
    </Link>
  </li>
);
