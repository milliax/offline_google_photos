import { Dispatch, SetStateAction } from "react"
import { Bars3Icon, MagnifyingGlassIcon, ArrowUpTrayIcon, QuestionMarkCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"


export default function Header({ setNavbarExpend, navbarExpend }: { setNavbarExpend: Dispatch<SetStateAction<boolean>>, navbarExpend: boolean }) {
    return (
        <div className="h-full border-b-2 border-black w-full flex flex-row px-2 justify-between">
            <div className="flex flex-row space-x-3">
                <Bars3Icon className="menu_btn" onClick={() => {
                    setNavbarExpend(!navbarExpend);
                }} />
                <div className="self-center block select-none">Google 相簿</div>
            </div>
            <div className="flex flex-row space-x-3">
                <MagnifyingGlassIcon className="menu_btn" />
                <ArrowUpTrayIcon className="menu_btn" />
                <QuestionMarkCircleIcon className="menu_btn" />
                <Cog6ToothIcon className="menu_btn" />
                <div className="menu_btn">
                    <div className="text-xs">名字</div>
                </div>
            </div>
        </div>
    )
} 