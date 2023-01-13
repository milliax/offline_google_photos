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

function FolderSelection() {
    const [directorySelected, setDirectorySelected] = useState<string | null>(localStorage.getItem("root"));

    const updateDirectory = async () => {
        const result = await (window as any).customAPI.selectFolder();
        // save directory path to redux
        // dispatch(uD(result))
        localStorage.setItem("root", result);
        setDirectorySelected(result);
        window.dispatchEvent(new Event("itemInserted"))
    }

    return (
        <div className="space-y-2 h-full w-full px-5">
            <div>Folder Selector</div>
            <div className="flex flex-wrap space-x-3">
                <div>
                    已選擇資料夾
                </div>
                <div>{directorySelected ?? "無選擇"}</div>
            </div>
            <div className="bg-red-200 px-3 py-1 w-20 text-center rounded-full select-none hover:bg-red-300 cursor-pointer" onClick={() => {
                updateDirectory()
            }}>變更</div>
        </div>
    )
}