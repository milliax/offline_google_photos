import { useEffect, useState, useRef } from "react"

const availableMethods = ["資料夾設定"]

export default function Settings() {
    const [methodSelected, setMethodSelected] = useState(0);

    return (
        <div className="overflow-auto h-full w-full scrollbar flex flex-row justify-between scrollbar">
            <div className="w-32 flex flex-col space-y-2">
                {availableMethods.map((text, cnt) => (
                    <div className="self-center bg-gray-100 hover:bg-gray-200 w-full py-1 text-center rounded-xl cursor-pointer" key={text} onClick={() => {
                        setMethodSelected(cnt);
                    }}>{text}</div>
                ))}
            </div>
            <div className="w-80 ">
                {methodSelected === 0 && <FolderSelection />}
            </div>
        </div>
    )
}

import { updateDirectory } from "../redux/reducers/settingsSlice";
import { useAppDispatch, useAppSelector } from "../redux/utils";

function FolderSelection() {
    const [directorySelected, setDirectorySelected] = useState<string | null>(useAppSelector(state => state.settings.directory));
    const [foldersToView, setFoldersToView] = useState<string[]>(["回上一頁"]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // TODO: pull directory path from redux

    }, [])

    const moveTo = () => {

    }

    return (
        <div className="space-y-2 h-full w-full">
            <div>Folder Selector</div>
            <div className="flex flex-wrap space-x-3">
                <div>
                    Now selected Folder
                </div>
                <div>D:\</div>
            </div>
            <div className="bg-red-200 px-3 py-1 w-20 text-center rounded-full select-none hover:bg-red-300 cursor-pointer" onClick={() => {
                // updateDirectory()
            }}>變更</div>
            <div className="bg-gray-100 h-[calc(100%-7rem)] w-full px-3 py-2 space-y-1">
                {/* folder viewer */}
                {foldersToView.map(folderName => (
                    <div className="bg-white px-2 select-none cursor-pointer rounded-md hover:bg-blue-100" onClick={() => {
                        moveTo();
                    }}>{folderName}</div>
                ))}
            </div>
        </div>
    )
}