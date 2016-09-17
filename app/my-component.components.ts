import {Component} from '@angular/core';
@Component({
    selector: 'typescript',
    template: `
 
    `
})
export class TypeScriptComponent {
    minumero : number;
    palabra : string;
    isLogeado: boolean;
    nombres: string[];
    amigos: Array<string>;
    anyVar: any;

    vacio() : void {

    }

    suma() : number {

        return 12; 
    }

    getPalabra() : string {

        return "Palabra retornada";
    }

    isMayorEdad(): boolean {
        return false;
    }

    anyReturn() : any {
        return false;
    }

}