import React, { useState } from "react";
import Header from "./header"
import Menu from "./menu"

enum Mode {
    Photos = "Photos",
    Discover = "Discover",
    Share = "Share",
    Star = "Star",
    Album = "Album",
    Archieve = "Archieve",
    Trash = "Trash",
}

export default function Layout({ children, mode }: { children: React.ReactNode, mode: Mode }) {
    const [navbarExpend, setNavbarExpend] = useState<boolean>(false);
    return (
        <div className="h-screen flex flex-col">
            <nav className="h-12">
                <Header setNavbarExpend={setNavbarExpend} navbarExpend={navbarExpend} />
            </nav>
            <div className="flex flex-col h-[calc(100%-3rem)]">
                <div className={`h-[calc(100%-3rem)] duration-75 fixed bg-white ${navbarExpend ? "w-52 scrollbar shadow-lg" : "w-16 scrollbar_hide"} overflow-y-auto`}
                    onMouseEnter={() => { setNavbarExpend(true) }}
                    onMouseLeave={() => { setNavbarExpend(false) }}>
                    <Menu expend={navbarExpend} mode={mode}/>
                </div>
                <div className="w-[calc(100%-4rem)] h-full self-end py-3 px-5 overflow-y-auto scrollbar">
                    {children}
                </div>
            </div>
        </div>
    )
}