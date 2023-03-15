import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
    });
    
    
  }, [location])

  return <>{props.children}</>
}

export default ScrollToTop
