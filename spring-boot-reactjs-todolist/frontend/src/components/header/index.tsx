import React, { useState } from 'react';
import { RiSunFill, RiMoonFill } from "react-icons/all";

const Header = () => {
  const [ theme, setTheme ] = useState<"dark" | "light">("dark");
  return (
    <header className = "p-4 bg-[#1D2A3B]">
      <div className = "flex justify-between items-center mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <a className = "text-2xl text-white font-semibold" href = "#">
          TODO
        </a>
      
      </div>
    </header>
  )
}

export default Header;
