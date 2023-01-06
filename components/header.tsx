import React, { Dispatch, SetStateAction, useState, useRef, useEffect } from "react"
import { Bars3Icon, MagnifyingGlassIcon, ArrowUpTrayIcon, QuestionMarkCircleIcon, Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline"

enum windowModes {
    Info = "info",
    Settings = "settings",
    Upload = "upload",
    None = "none",
}

export default function Header({ setNavbarExpend, navbarExpend }: { setNavbarExpend: Dispatch<SetStateAction<boolean>>, navbarExpend: boolean }) {
    const [showFloatingWindow, setShowFloatingWindow] = useState<boolean>(false);
    const [windowMode, setWindowMode] = useState<windowModes>(windowModes.None);

    const updateFloatingWindowMode = (mode: windowModes) => {
        if (windowMode === mode) {
            setShowFloatingWindow(!showFloatingWindow);
            return;
        }
        setWindowMode(mode);
        setShowFloatingWindow(true);
    }

    return (
        <div className="h-full border-b-2 border-black w-full flex flex-row px-2 justify-between">
            <div className="flex flex-row space-x-3">
                <Bars3Icon className="menu_btn" onClick={() => {
                    setNavbarExpend(!navbarExpend);
                }} />
                <div className="self-center block select-none">Smart Photos</div>
            </div>
            <div className="flex flex-row space-x-3">
                <MagnifyingGlassIcon className="menu_btn" />
                <ArrowUpTrayIcon className="menu_btn" onClick={() => {
                    updateFloatingWindowMode(windowModes.Upload);
                }} />
                <QuestionMarkCircleIcon className="menu_btn" onClick={() => {
                    updateFloatingWindowMode(windowModes.Info)
                }} />
                <Cog6ToothIcon className="menu_btn" onClick={() => {
                    updateFloatingWindowMode(windowModes.Settings)
                }} />
                <div className="menu_btn">
                    <div className="text-xs">名字</div>
                </div>
                {showFloatingWindow && <FloatingWindow mode={windowMode} setWindowStatus={setShowFloatingWindow} />}
            </div>
        </div>
    )
}

import Settings from "../components/settings"

function FloatingWindow({ mode, setWindowStatus }: { mode: windowModes, setWindowStatus: Dispatch<SetStateAction<boolean>> }) {
    const divRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<number>(3);

    // useEffect(()=>{
    //     divRef.current.focus = true;
    // },[])

    // console.log("Hello")
    // console.log(divRef.current?.focus())
    // if (!divRef.current?.focus()) {
    //     // window lost focus => close window
    //     setWindowStatus(false)
    // }

    return (
        <div className="bg-white w-4/5 h-4/5 border border-black absolute mb top-[10%] left-[10%] px-10 rounded-lg" ref={divRef}>
            <div className="pt-3 flex flex-row justify-between h-12 select-none">
                <div>{mode}</div>
                <div><XMarkIcon className="h-6 aspect-square hover:bg-gray-100 p-1 rounded-full cursor-pointer"
                    onClick={() => {
                        setWindowStatus(false)
                    }} />
                </div>
            </div>
            <div className="h-[calc(90%-2.25rem)] w-full">
                {mode === windowModes.Info && <Info />}
                {mode === windowModes.Settings && <Settings />}
            </div>
        </div>
    )
}

function Info() {
    return (
        <div className="overflow-auto h-full w-full scrollbar">
            <div>如何使用</div>
        </div>
    )
}