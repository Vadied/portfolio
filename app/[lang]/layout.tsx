const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex-grow p-8">{children}</div>;
};

export default Layout;
