import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold">Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
        </div>
        <div>
          <h4 className="font-bold">Make Money with Us</h4>
          <p>Sell on Amazon</p>
        </div>
        <div>
          <h4 className="font-bold">Amazon Payment Products</h4>
          <p>Amazon Business Card</p>
        </div>
        <div>
          <h4 className="font-bold">Let Us Help You</h4>
          <p>Amazon and COVID-19</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
