import MainNav from "@/features/nav/MainNav";
import TopNav from "@/features/nav/TopNav";
import { useSelector } from "react-redux";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <header className="sticky top-0 z-50">
      {!auth.token && <TopNav />}
      <MainNav />
    </header>
  );
};

export default Nav;
