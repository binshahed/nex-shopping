import { Route, Routes,  useParams } from "react-router";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // const { pathname } = useLocation();
  const { url } = useParams();
  return (
    <div>
      <Link to={`/${url}/order`}>order</Link>
      <Routes>
        <Route path={`/${url}/order`} element={<p>hello world</p>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
