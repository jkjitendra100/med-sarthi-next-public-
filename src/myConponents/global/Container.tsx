export default function Container({ children, className = "" }: any) {
  return (
    <div
      className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
