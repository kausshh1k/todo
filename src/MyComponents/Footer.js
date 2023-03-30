import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    marginBottom: "0",
  };
  return (
    <div>
      <p className="text-center  bg-dark text-light py-3">
        Copyright &copy; Kaushik
      </p>
    </div>
  );
};

export default Footer;
