// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    /**
     * 取得客戶端資料
     * @returns 客戶端資料
     */
    getClientData: (): Promise<any> => ipcRenderer.invoke('getClientData'),
    /**
     * 傳送當前完整網址
     * @param url 網址
     */
    oauthComplete: (state: boolean): void => ipcRenderer.send('oauthComplete', state.toString()),

    oauthData: (callback: (event: any, verifier: string, state: string) => void): Electron.IpcRenderer => ipcRenderer.on('oauthData', callback),
})