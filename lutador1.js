"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lutador = void 0;
class Lutador {
    constructor(_nome, _especial = "", _vida = 100, _peso = 50 + Math.round(Math.random() * 50), _energia = 100) {
        this._nome = _nome;
        this._especial = _especial;
        this._vida = _vida;
        this._peso = _peso;
        this._energia = _energia;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
        console.log(this.nome);
    }
    get energia() {
        return this._energia;
    }
    get vida() {
        return this._vida;
    }
    status() {
        return `Vida: ${this._vida} \n Energia: ${this._energia} \n Peso: ${this._peso}`;
    }
    acertouSoco() {
        if (this._peso >= 90) {
            this._energia -= 16;
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._energia -= 8;
        }
        else if (this._peso <= 60) {
            this._energia -= 4;
        }
    }
    recebeSocoDe(alvo) {
        if (this._peso >= 90) {
            this._vida -= (10 + alvo._peso * 0.1);
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= (5 + alvo._peso * 0.1);
        }
        else if (this._peso <= 60) {
            this._vida -= 2;
        }
    }
}
exports.Lutador = Lutador;
