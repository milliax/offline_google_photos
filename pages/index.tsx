import React, { useState, useEffect } from "react";
import Header from "../components/header"
import Menu from "../components/menu";


export default function Home() {
  const [navbarExpend, setNavbarExpend] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col">
      <nav className="h-12">
        <Header setNavbarExpend={setNavbarExpend} navbarExpend={navbarExpend}/>
      </nav>
      <div className="flex flex-grow">
        <div className={`h-full duration-75 ${navbarExpend ? "w-52" : "w-16"} `}
          onMouseEnter={() => { setNavbarExpend(true) }}
          onMouseLeave={() => { setNavbarExpend(false) }}>
          <Menu expend={navbarExpend} />
        </div>
        <div className="w-full h-full bg-blue-100">
          HaHa
        </div>
      </div>
    </div>
  )
}
