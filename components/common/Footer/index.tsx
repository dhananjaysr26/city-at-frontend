import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className=" bg-footer-texture bg-no-repeat w-full object-cover">
      <h1>Hello Footer</h1>
    </footer>
  );
};

export default Footer;
