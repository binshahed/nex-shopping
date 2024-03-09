import { Route, Routes, Link, useLocation } from "react-router-dom";

const Order = () => (
  <div>
    <p>Hello world</p>
  </div>
);

const Dashboard = () => {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1]; // Adjust index based on your route structure

  return (
    <div className="text-center">
      <Link to={`/${url}/order`}>order</Link>
      <Routes>
        <Route path={`/order`} element={<Order />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
