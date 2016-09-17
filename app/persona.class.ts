class Persona {

    public nombre : string;
    public edad : number;
    public sexo: string;

    constructor(nombre: string, edad:number, sexo:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    public hola() : void {
        console.log("Hola " + this.nombre + " !");
    }

    public miedad15anios(): number {
        return this.edad + 15;
    }
}

let p: Persona = new Persona("Alex", 39, "M");
p.hola();



class DartVader {
    public side: string;
    public dialogo(dialogo : string) : void {
        console.log(dialogo);
    }
}

let father : DartVader = new DartVader();
father.side = "Dark side";
console.log(father.side);
father.dialogo("Luke I am your father");

class Luke extends DartVader {

}

let hijo: Luke = new Luke();
hijo.side = "the force";
console.log("-->" + hijo.side)
hijo.dialogo("Nooooooooooo!!");