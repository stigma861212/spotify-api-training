import { app, BrowserWindow, ipcMain, Menu, net, protocol } from 'electron';
import { IClientData } from './type/global.interface';
import dotenv from 'dotenv';
import { Page } from './enums/pageStatus';

dotenv.config();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).

//#region 各頁面及對應加載的變數名稱(electron forge 預設設定名稱)
/**初始頁 */
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
/**初始頁腳本 */
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
/**首頁 */
declare const MUSIC_MAIN_WINDOW_WEBPACK_ENTRY: string;
/**首頁腳本 */
declare const MUSIC_MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
//#endregion

/**初始頁加載視窗 */
let mainWindow: BrowserWindow;

const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    titleBarStyle: 'hidden',
  });

  // NOTE: 僅關閉工具列
  mainWindow.setMenu(null);
  // NOTE: 選單快捷方式全部關掉
  // Menu.setApplicationMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // If in test mode, open the DevTools.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// electron protocol註冊Schemes
if (app.isPackaged) {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'http',
      privileges: {
        secure: true,
        standard: true,
        supportFetchAPI: true, // Add this if you want to use fetch with this protocol.
        // stream: true, // Add this if you intend to use the protocol for streaming i.e. in video/audio html tags.
        // corsEnabled: true, // Add this if you need to enable cors for this protocol.
      },
    },
  ]);

  app.whenReady().then(() => {
    // 攔截redirecturi後取得網址參數導向實際url
    protocol.handle('http', (request) => {
      console.log("protocol", request.url);

      if (request.url.includes('main_window')) {
        // NOTE: 理論上回傳process.env.REDIRECTURI
        mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY + request.url.slice(process.env.REDIRECTURI.length));
      }

      return new Promise<Response>(() => { });
    })
  })
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//#region 添加contextBridge所需監聽、發送事件

/**回傳env資訊 */
ipcMain.handle("getClientData", () => {
  const data: IClientData = {
    clientId: process.env.CLIENTID,
    redirectUri: process.env.REDIRECTURI
  }
  return JSON.stringify(data);
});

ipcMain.on("minimize", (event: Electron.IpcMainEvent) => {
  mainWindow.minimize();
})

ipcMain.on("autoResize", (event: Electron.IpcMainEvent) => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
})

ipcMain.on("close", (event: Electron.IpcMainEvent) => {
  mainWindow.close();
})

/**跳轉頁面功能 */
ipcMain.on('switchPage', (event: Electron.IpcMainEvent, page: string) => {

  mainWindow.webContents.send("testPath", page);

  if (page == Page.MainPage) {
    mainWindow.loadURL(MUSIC_MAIN_WINDOW_WEBPACK_ENTRY);
  }

  // TODO:要做
  // const exampleFilePath = getFilePath(page);

  // mainWindow.webContents.send("testPath", page);

  // C:\Git\spotify-api-training\out\spotify-api-training-win32-x64\resources\app.asar\src\page\login.html
  // mainWindow.webContents.send("testPath", exampleFilePath);

  // C:\Git\spotify-api-training\out\spotify-api-training-win32-x64\resources\app.asar\.vite\build
  // mainWindow.webContents.send("testPath", __dirname);

});

//#endregion