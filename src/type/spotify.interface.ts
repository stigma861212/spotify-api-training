/**
 * 取得使用者資料
 * 
 * https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
 */
export interface IProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string; total: number;
    };
    href: string
    id: string
    images: Array<IPicture>
    product: string
    type: string
    uri: string
}

interface IPicture {
    url: string
    height: number
    width: number
}