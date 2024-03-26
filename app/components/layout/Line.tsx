const Line: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div
      className={`relative mb-15 ml-4 hidden h-[2px] w-[500px] bg-PaleOrange md:block lg:mb-20 lg:w-[760px]`}
    >
      <div
        className={`absolute left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-DarkCyan ${isDark ? "bg-transparent" : "bg-LightCream"}`}
      />
      <div
        className={` absolute right-0 h-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-full border-[2px] border-DarkCyan ${isDark ? "bg-transparent" : "bg-LightCream"}`}
      />
      <div
        className={`absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-DarkCyan ${isDark ? "bg-transparent" : "bg-LightCream"}`}
      />
    </div>
  );
};

export default Line;
