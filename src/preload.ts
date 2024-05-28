// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    getClientData: () => ipcRenderer.invoke('getClientData'),
    switchPage: (page: string) => ipcRenderer.send('switchPage', page),
    testPath: (callback: (event: any, value: string) => void) => ipcRenderer.on('testPath', callback),
})