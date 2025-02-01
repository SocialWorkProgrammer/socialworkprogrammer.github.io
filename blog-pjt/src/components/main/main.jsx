import React from "react";

const Navbar = () => {
  return (
    <header className="bg-Midnight text-white shadow-md h-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* 네비게이션 링크 */}
        <nav className="space-x-10">
          <a href="#home" className="hover:text-gray-300 text-2xl">
            PortFolio
          </a>
          <a href="#about" className="hover:text-gray-300 text-2xl">
            About Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
