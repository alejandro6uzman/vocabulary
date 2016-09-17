export class ImagenesServicio {
    
    public getImages() : any[] {
        return [
            {imagenUrl: 'http://lorempixel.com/400/200/?1', status:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', title:'Imagen 1', isFav: false, nuFav:13},
            {imagenUrl: 'http://lorempixel.com/400/200/?2', status:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title:'Imagen 2', isFav: true, nuFav:2},
            {imagenUrl: 'http://lorempixel.com/400/200/?3', status:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', title:'Imagen 3', isFav: false, nuFav:0}
        ];
     }
}