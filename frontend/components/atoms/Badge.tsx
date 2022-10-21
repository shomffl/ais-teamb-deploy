const Badge = ({ children }: { children: string }) => {
  return (
    <>
      <span className="inline-block bg-blue2 rounded-full px-3 py-1 text-sm font-semibold text-white2 mr-2 mb-2">
        {children}
      </span>
    </>
  );
};

export default Badge;
