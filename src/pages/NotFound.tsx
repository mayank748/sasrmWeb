import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import notfound from "@/assets/pageNotFound.gif";
import './NotFund.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="backgroundColor min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4"><img 
                  src={notfound} 
                  alt="Not found"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                /></p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;