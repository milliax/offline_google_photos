import { useEffect, useState, useRef } from "react"
import { updateDirectory } from "../redux/reducers/settingsSlice";

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

function FolderSelection() {
    const [directorySelected, setDirectorySelected] = useState<string>("");
    const folderInput = useRef();

    useEffect(() => {
        // TODO: pull directory path from redux
    }, [])

    return (
        <div className="space-y-2">
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
            <input type="file" directory="" webkitdirectory="" ref={folderInput} />
        </div>
    )
}