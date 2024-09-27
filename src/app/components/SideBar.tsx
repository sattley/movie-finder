import Logo from "./Logo";
const SideBar = () => {
  return (
    <aside className="hidden md:w-1/4 md:block md:fixed md:top-0 md:left-0 md:h-full md:px-16 bg-[#3B1970]">
      <Logo />
    </aside>
  );
};

export default SideBar;
