import Link from "next/link";

type FooterLinkProps = Readonly<{
  text: string;
  href: string;
}>;

export const FooterLink = ({ text, href }: FooterLinkProps) => (
  <li>
    <Link
      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
      href={href}
    >
      {text}
    </Link>
  </li>
);
