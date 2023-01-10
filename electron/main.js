// import { app, BrowserWindow } from "electron"
// import path from "path"
// import isDev from "electron-is-dev"

const createWindow = async () => {
    const { BrowserWindow, ipcMain, dialog } = await import("electron")
    const path = await import("path")
    const isDev = await import("electron-is-dev")

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.handle("dialog:openDirectory", async () => {
        const {canceled,filePaths} = await dialog.showOpenDialog(mainWindow,{
            properties: ["openDirectory"]
        })
        if(canceled){
            return
        }else{
            return filePaths[0]
        }
    })

    if (isDev) {
        // 開發階段直接與 React 連線
        mainWindow.loadURL('http://localhost:3000/');
        // 開啟 DevTools.
        mainWindow.webContents.openDevTools()
    } else {
        // 產品階段直接讀取 React 打包好的
        mainWindow.loadFile('./build/index.html');
    }
}

(async () => {
    let { app } = await import("electron")

    app.whenReady().then(() => {
        createWindow()
        app.on('activate', function () {
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    })
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
    })
})();
