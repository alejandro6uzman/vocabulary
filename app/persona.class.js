var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persona = (function () {
    function Persona(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    Persona.prototype.hola = function () {
        console.log("Hola " + this.nombre + " !");
    };
    Persona.prototype.miedad15anios = function () {
        return this.edad + 15;
    };
    return Persona;
}());
var p = new Persona("Alex", 39, "M");
p.hola();
var DartVader = (function () {
    function DartVader() {
    }
    DartVader.prototype.dialogo = function (dialogo) {
        console.log(dialogo);
    };
    return DartVader;
}());
var father = new DartVader();
father.side = "Dark side";
console.log(father.side);
father.dialogo("Luke I am your father");
var Luke = (function (_super) {
    __extends(Luke, _super);
    function Luke() {
        _super.apply(this, arguments);
    }
    return Luke;
}(DartVader));
var hijo = new Luke();
hijo.side = "the force";
console.log("-->" + hijo.side);
hijo.dialogo("Nooooooooooo!!");
//# sourceMappingURL=persona.class.js.map