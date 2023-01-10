(() => {
    const { contextBridge, ipcRenderer } = require("electron");
    contextBridge.exposeInMainWorld("customAPI", {
        selectFolder: () => ipcRenderer.invoke("dialog:openDirectory")
    })
})()