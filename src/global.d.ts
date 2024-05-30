declare interface Window {
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
    import { ComponentOptions } from "vue"
    const componentOptions: ComponentOptions
    export default componentOptions
  }