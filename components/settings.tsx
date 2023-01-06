import { useState } from "react"

const availableMethods = ["資料夾設定"]

export default function Settings() {
    const [methodSelected, setMethodSelected] = useState(0);

    return (
        <div className="overflow-auto h-full w-full scrollbar flex flex-row justify-between scrollbar">
            <div className="w-32 flex flex-col space-y-2">
                {availableMethods.map((text,cnt) => (
                    <div className="self-center bg-gray-100 hover:bg-gray-200 w-full py-1 text-center rounded-xl cursor-pointer" key={text} onClick={()=>{
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

function FolderSelection(){
    return(
        <div>
            Folder Select
        </div>
    )
}