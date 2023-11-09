export interface imgs {
    imgUrl: string;
    pageUrl: string;
}

export const images: imgs[] =
    [
        {
            imgUrl: "https://github.com/",
            pageUrl: "https://github.com/"

        },
        {
            imgUrl: "https://shadidatesco.com/",
            pageUrl: "https://shadidatesco.com/"
        },
        {
            imgUrl: "https://arazmokasarat.com/",
            pageUrl: "https://arazmokasarat.com/"
        },
        {
            imgUrl: "https://rotakhtiyab.ir/",
            pageUrl: "https://rotakhtiyab.ir/"
        },
        {
            imgUrl: "https://www.google.com",
            pageUrl: "https://www.google.com"
        },
        {
            imgUrl: "https://angular.io/guide/http-request-data-from-server",
            pageUrl: "https://angular.io/guide/http-request-data-from-server"
        },
        {
            imgUrl: "https://rotakhtodoz.ir/",
            pageUrl: "https://rotakhtodoz.ir/"
        },
        {
            imgUrl: "https://patooyab.ir/",
            pageUrl: "https://patooyab.ir/"
        },
        {
            imgUrl: "https://shadidatesco.com/",
            pageUrl: "https://shadidatesco.com/"
        },
        {
            imgUrl: "https://arazmokasarat.com/",
            pageUrl: "https://arazmokasarat.com/"
        },
        {
            imgUrl: "https://rotakhtiyab.ir/",
            pageUrl: "https://rotakhtiyab.ir/"
        },
    ]

export function addImg(imgUrl:string ,pageUrl:string){
    images.unshift({imgUrl,pageUrl})
}
