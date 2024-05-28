declare interface Window {
    electronAPI: {
        getClientData(): Promise<any>;
        switchPage(page: string): void;
        testPath(callback: (event: any, value: string) => void): void;
    };
}