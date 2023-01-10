import { PhotoIcon, MagnifyingGlassIcon, UserCircleIcon, StarIcon, BookmarkSquareIcon, ArchiveBoxArrowDownIcon, TrashIcon, CloudIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { useRouter } from "next/router"

enum Mode {
    Photos = "Photos",
    Discover = "Discover",
    Share = "Share",
    Star = "Star",
    Album = "Album",
    Archieve = "Archieve",
    Trash = "Trash",
    No = "No"
}

interface menuItem {
    Icon: any,
    text: string,
    select?: Mode,
    url: string,
}

const menuFunctions1: menuItem[] = [
    {
        Icon: PhotoIcon,
        text: "相片",
        select: Mode.Photos,
        url: "/",
    }, {
        Icon: MagnifyingGlassIcon,
        text: "探索",
        select: Mode.Discover,
        url: "/discover"
    }, {
        Icon: UserCircleIcon,
        text: "共享",
        select: Mode.Share,
        url: "/sharing"
    }
]
const menuFunctions2: menuItem[] = [
    {
        Icon: StarIcon,
        text: "收藏",
        select: Mode.Star,
        url: "/star"
    }, {
        Icon: BookmarkSquareIcon,
        text: "相簿",
        select: Mode.Album,
        url: "/album"
    }, {
        Icon: ArchiveBoxArrowDownIcon,
        text: "封存",
        select: Mode.Archieve,
        url: "/archieve"
    }, {
        Icon: TrashIcon,
        text: "垃圾桶",
        select: Mode.Trash,
        url: "/trash"
    }
]

export default function Menu({ expend, mode }: { expend: boolean, mode: Mode }) {
    // console.log(expend)
    return (
        <div className={`flex flex-col ${expend || "divide-y-2"}`}>
            <div className="flex flex-col py-5 space-y-3">
                {menuFunctions1.map((data) => (
                    <MenuItem expend={expend} Icon={data.Icon} text={data.text} key={data.text} select={data.select} mode={mode} url={data.url} />
                ))}
            </div>
            <div className="flex flex-col py-5 space-y-3">
                {menuFunctions2.map((data) => (
                    <MenuItem expend={expend} Icon={data.Icon} text={data.text} key={data.text} select={data.select} mode={mode} url={data.url} />
                ))}
            </div>
            <div className="py-5 pb-20">
                <MenuItem expend={expend} Icon={CloudIcon} text="使用空間" mode={Mode.No} url={"#"} />
            </div>
        </div>
    )
}

interface menuItemFinal extends menuItem {
    expend: boolean;
    mode: Mode;
}

function MenuItem({ expend, Icon, text, select, mode, url }: menuItemFinal) {
    const router = useRouter();
    return (
        <div className={`pl-5 flex flex-row space-x-5 overflow-clip w-40 rounded-r-full select-none cursor-pointer py-1 ${expend && select === mode ? "bg-blue-100 hover:bg-blue-200" : "hover:bg-gray-100"} p-1`}
            onClick={() => {
                router.push(`${url}`)
            }}>
            <div className={`${expend || select === mode && "bg-blue-100"} p-2 rounded-full`}>
                <Icon className="w-6 aspect-square" />
            </div>
            <div className={`${expend ? "visible" : "visible"} w-32 self-center`}>{text}</div>
        </div>
    )
}
