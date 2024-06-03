declare interface Window {
    /**electron創建方法集合  */
    electronAPI: {
        /**取得客戶端資料 */
        getClientData(): Promise<any>;
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
    };
}

declare module "*.vue" {
    import type {DefineComponent} from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component: DefineComponent<object, object, any>
    export default component
  }