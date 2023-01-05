import { PhotoIcon, MagnifyingGlassIcon, UserCircleIcon, StarIcon, BookmarkSquareIcon, ArchiveBoxArrowDownIcon, TrashIcon, CloudIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"

interface menuItem {
    Icon: any,
    text: string,
}

const menuFunctions1: menuItem[] = [
    {
        Icon: PhotoIcon,
        text: "相片"
    }, {
        Icon: MagnifyingGlassIcon,
        text: "探索"
    }, {
        Icon: UserCircleIcon,
        text: "共享"
    }
]
const menuFunctions2: menuItem[] = [
    {
        Icon: StarIcon,
        text: "收藏"
    }, {
        Icon: BookmarkSquareIcon,
        text: "相簿"
    }, {
        Icon: ArchiveBoxArrowDownIcon,
        text: "封存"
    }, {
        Icon: TrashIcon,
        text: "垃圾桶"
    }
]

export default function Menu({ expend }: { expend: boolean }) {
    // console.log(expend)
    return (
        <div className={`flex flex-col ${expend || "divide-y-2"}`}>
            <div className="flex flex-col py-5 space-y-5">
                {menuFunctions1.map((data) => (
                    <MenuItem expend={expend} Icon={data.Icon} text={data.text} key={data.text} />
                ))}
            </div>
            <div className="flex flex-col py-5 space-y-5">
                {menuFunctions2.map((data) => (
                    <MenuItem expend={expend} Icon={data.Icon} text={data.text} key={data.text} />
                ))}
            </div>
            <div className="py-5">
                <MenuItem expend={expend} Icon={CloudIcon} text="使用空間" />
            </div>
        </div>
    )
}

interface menuItemFinal extends menuItem {
    expend: boolean;
}

function MenuItem({ expend, Icon, text }: menuItemFinal) {
    return (
        <div className={`pl-6 flex flex-row space-x-5 overflow-clip w-32`}>
            <Icon className="w-8 aspect-square" />
            <div className={`${expend ? "visible" : "visible"} w-28 `}>{text}</div>
        </div>
    )
}
