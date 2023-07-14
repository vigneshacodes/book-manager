import React from "react";

const Footer = () => {
  let date = new Date();
  return (
    <footer className="Footer">Copyright &copy; Vignesh Shankar {date.getFullYear()}</footer>
  );
};

export default Footer;
