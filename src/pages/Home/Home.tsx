import { routes } from "@/lib";
import { Navigate } from "react-router-dom";

const Home = () => {
  return <Navigate to={routes.guest} />;
  return <div>Home</div>;
};

export default Home;
