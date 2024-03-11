import MainNav from "@/features/nav/MainNav";
import TopNav from "@/features/nav/TopNav";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50">
      <TopNav />
      <MainNav />
    </header>
  );
};

export default Nav;
