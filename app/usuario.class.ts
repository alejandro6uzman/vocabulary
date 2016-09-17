import {User} from './user.interface';

export class Usuario implements User {

    constructor(public id: number, public nombre: string, public publicacion: string, public imagenUrl: string) {

    }
}