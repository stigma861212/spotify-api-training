declare interface Window {
    /**electron創建方法集合  */
    electronAPI: {
        /**取得客戶端資料 */
        getClientData(): Promise<any>;
        /**
         * oauth驗證流程完成
         */
        oauthComplete(state: boolean): void;
        /**
         * 切換頁面
         * @param page 頁面名稱
         */
        switchPage(page: string): void;
        /**
         * 接`index.ts`回傳字串，測試用
         * @param callback 接字串用fn
         */
        testPath(callback: (event: any, value: string) => void): void;
        /**
         * 取得main_window驗證資料
         */
        oauthData(callback: (event: any, verifier: string, state: string) => void): void;
        /**
         * 打開spotify oauth 頁面
         * @param url oauth url
         * @param verifier 驗證器
         * @param state 驗證比對碼
         */
        openOauthWindow(url: string, verifier: string, state: sring): void;
        /**更新視窗大小 */
        resizeWindow(callback: (event: any, value: string) => void): void;
        /**視窗最小化 */
        windowMinimize(): void;
        /**視窗放大縮小 */
        windowAutoResize(): void;
        /**視窗關閉 */
        windowClose(): void;
    };
}

declare module "*.vue" {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component: DefineComponent<object, object, any>
    export default component
}