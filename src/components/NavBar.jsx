import React from "react";
import { useState } from "react";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-[#00BF63] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="pi learning" className="h-12 w-auto" />
        </a>

        <a
          href="/iniciar-sesion"
          className="text-xl font-medium text-gray-50 transition-colors hover:text-white"
        >
          Iniciar sesion
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
