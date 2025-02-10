import { ReactNode } from "react";

type AddPostLayoutProps = Readonly<{
  children: ReactNode;
}>;

const AddPostLayout = ({ children }: AddPostLayoutProps) => <>{children}</>;

export default AddPostLayout;
