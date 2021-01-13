import { Description } from './description';
import { Platform } from './plataforma';
import { Complement } from './complement';

export interface Videogame {
    _id: string,
    name: string,
    shortName: string,
    genre: string[],
    developer: string,
    images: string[],
    pegi: string,
    price: string,
    salePrice: string,
    stock: boolean,
    release: string,
    comments: string[],
    platform: Platform,
    description: Description[],
    sales: boolean,
    edition: boolean,
    complement: Complement[],
    nameEdition: string,
    photoSlider: string,
    playStation: boolean,
}