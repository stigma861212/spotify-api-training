export interface IAlbum {
    album_type: string,
    total_tracks: number,
    available_markets: Array<string>,
    external_urls: {
        spotify: string;
    };
    href: string,
    id: string,
    images: Array<IPicture>,
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions: {
        reason: string
    }
    type: string,
    uri: string,
    artists: {
        external_urls: {
            spotify: string;
        },
        href: string,
        id: string,
        name: string,
        type: string,
        uri: string,
    }[],
    tracks: {
        href: string,
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number,
        items: {
            artists: {
                external_urls: {
                    spotify: string;
                },
                href: string,
                id: string,
                name: string,
                type: string,
                uri: string,
            }[],
            available_markets: Array<string>,
            disc_number: number,
            duration_ms: number,
            explicit: boolean,
            external_urls: {
                spotify: string;
            },
            href: string,
            id: string,
            is_playable: boolean,
            linked_from: {
                external_urls: {
                    spotify: string;
                    href: string,
                    id: string,
                    type: string,
                    uri: string,
                },
            },
            restrictions: {
                reason: string
            },
            name: string,
            preview_url: string,
            track_number: number,
            type: string,
            uri: string,
            islocal: boolean,
        },
    },
    copyrights: {
        text: string,
        type: string,
    },
    external_ids: {
        isrc: string
        ean: string
        upc: string
    },
    genres: Array<string>,
    label: string,
    popularity: number
}

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

// https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
interface ITopItems {
    href: string
    items: Array<any>
    limit: number
    next: string
    offset: number
    previous: string
    total: number
}

export interface IArtist {

}

export interface ITrack {
    album: IAlbum
    artists: Array<ITrackArtist>
    available_markets: Array<string>
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: object
    external_urls: {
        spotify: string;
    };
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

export interface ITopArtists extends ITopItems {
    items: Array<IArtist>
}

export interface ITopTracks extends ITopItems {
    items: Array<ITrack>
}

interface ITrackArtist {
    external_urls: {
        spotify: string;
    };
    followers: object
    genres: Array<string>
    href: string
    id: string
    images: Array<IPicture>
    name: string
    popularity: number
    type: string
    uri: string
}