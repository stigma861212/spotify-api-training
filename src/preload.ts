// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    /**
     * 取得客戶端資料
     * @returns 客戶端資料
     */
    getClientData: () => ipcRenderer.invoke('getClientData'),
    /**
     * 切換頁面
     * @param page 頁面名稱
     */
    switchPage: (page: string) => ipcRenderer.send('switchPage', page),
    /**
     * 接`index.ts`回傳字串，測試用
     * @param callback 接字串用fn
     */
    testPath: (callback: (event: any, value: string) => void) => ipcRenderer.on('testPath', callback),
})