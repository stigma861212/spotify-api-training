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
     * 切換頁面
     * @param page 頁面名稱
     */
    switchPage: (page: string): void => ipcRenderer.send('switchPage', page),
    /**
     * 接`index.ts`回傳字串，測試用
     * @param callback 接字串用fn
     */
    testPath: (callback: (event: any, value: string) => void): Electron.IpcRenderer => ipcRenderer.on('testPath', callback),
    /**
     * 更新視窗尺寸
     * @param callback 接字串用fn
     */
    resizeWindow: (callback: (event: any, value: string) => void): Electron.IpcRenderer => ipcRenderer.on('resizeWindow', callback),
    /**取得視窗尺寸 */
    windowResize: (): void => ipcRenderer.send('windowResize'),
    /**
     * 打開spotify oauth 頁面
     * @param url oauth url
     */
    openOauthWindow: (url: string, verifier: string, state: string): void => ipcRenderer.send('openOauthWindow', url, verifier, state),
    /**視窗最小化 */
    windowMinimize: (): void => ipcRenderer.send('minimize'),
    // /**視窗放大縮小 */
    windowAutoResize: (): void => ipcRenderer.send('autoResize'),
    // /**視窗關閉 */
    windowClose: (): void => ipcRenderer.send('close'),
})