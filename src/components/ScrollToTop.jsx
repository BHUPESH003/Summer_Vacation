import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the location (URL) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything, it's just for handling the effect
};

export default ScrollToTop;
