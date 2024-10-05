import Link from "next/link";

type HeaderNavLink = Readonly<{ href: string; text: string }>;

export const HeaderNavLink = ({ text, href }: HeaderNavLink) => (
  <li className="mr-2">
    <Link className="inline-block py-2 px-2 text-white no-underline" href={href}>
      {text}
    </Link>
  </li>
);
