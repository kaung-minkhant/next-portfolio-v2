export default function SplashPage({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div
        className="page-title w-full flex-grow justify-center items-center font-semibold text-7xl"
        style={{ display: "flex" }}
      >
        {title}
      </div>
      {children}
    </>
  );
}
