import Logo from "./Logo";
import HamburgerIcon from "/public/images/Hamburger-icon.svg";

const MobileHeader: React.FC = () => {
  return (
    <header className="md:hidden sticky top-0 px-4 h-16 flex justify-between items-center z-10 bg-[#3B1970]">
      <Logo />
      <button className="text-lightWhite">
        <HamburgerIcon className="w-6 h-6" />
      </button>
    </header>
  );
};

export default MobileHeader;
