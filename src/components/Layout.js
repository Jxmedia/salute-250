import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);
  return (
    <>
      <div>
        <Header currentPath={path} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
