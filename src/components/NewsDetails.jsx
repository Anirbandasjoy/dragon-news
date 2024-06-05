import { useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightNavbar from "../pages/home/RightNavbar";

const NewsDetails = () => {
  const { state } = useLocation();
  const { title, details, image_url } = state || {};
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-10">
        <div className="col-span-3">
          <h1 className="text-lg mb-7 font-semibold ">Dragon News</h1>
          <div>
            <img className="w-full" src={image_url} alt="image" />
            <h2 className="text-2xl mt-6 font-semibold">{title}</h2>
            <p className="mt-3 text-gray-600">{details}</p>
          </div>
        </div>

        <div className="h-screen overflow-auto">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
