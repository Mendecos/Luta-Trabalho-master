import { Lutador } from "./lutador1";
import prompt from "prompt-sync";


const teclado = prompt()
const Lutador1Nome = teclado("Qual é o nome do lutador 1: ")
const Lutador2Nome = teclado("Qual é o nome do lutador 2: ")


const lutador1: Lutador = new Lutador(Lutador1Nome);
const lutador2: Lutador = new Lutador(Lutador2Nome);

console.log(lutador1)
console.log(lutador2)

while (lutador1.vida>0 && lutador2.vida>0) {
    const _AleatorioAtaque: number = 1+ Math.round(Math.random() * 1)

    console.log(`+--------------------------------------`)
    console.log(`${Lutador1Nome} recebeu a chave 1 para soco`);
    console.log("*--------------*");

    console.log(`${Lutador2Nome} recebeu a chave 2 para soco`);


    console.log("+---------------------------------------")
    console.log(_AleatorioAtaque);
    
    console.log("--------");
    let opcao = +teclado("Digite o numero sorteado em cima:")
    console.log("+---------------------------------------")

    
    switch (opcao) {
        case 1:
            if (lutador1.energia > 0 && lutador1.vida > 0) {
                lutador1.acertouSoco()

                console.log("*---------------------*");

                lutador2.recebeSocoDe(lutador1)
                console.log(`${Lutador1Nome} acertou o soco em ${Lutador2Nome}`);
                console.log("*-----*");

                const status1 = lutador1.status()
                console.log(Lutador1Nome, "----- \n", status1);
                console.log("*---------------------------------------*");

                const status2 = lutador2.status()
                console.log(Lutador2Nome, "----- \n", status2);
            } else if (lutador1.energia < 0) {
                console.log(`${Lutador1Nome} não tem energia o suficiente para atacar`);
                console.log(":-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:");
                console.log(`${Lutador2Nome} Venceu o duelo`);
            }
            else if (lutador1.vida < 0) {
                console.log(`${Lutador1Nome} não tem vida o suficiente`);
                console.log(":-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:");
                console.log(`${Lutador2Nome} Venceu o duelo`);
            }



            break;

        case 2:
            if (lutador2.energia > 0) {
                lutador2.acertouSoco()

                console.log("*---------------------*");

                lutador1.recebeSocoDe(lutador2)
                console.log(`${Lutador2Nome} acertou o soco em ${Lutador1Nome}`);
                console.log("*-----*");

                const status2 = lutador2.status()
                console.log(Lutador2Nome, "----- \n", status2);
                const status1 = lutador2.status()
                console.log(Lutador1Nome, "-----", status1);
            } else if (lutador2.energia < 0) {
                console.log(`${Lutador2Nome} não tem energia o suficiente para atacar`);
                console.log(":-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:");
                console.log(`${Lutador1Nome} Venceu o duelo`);
            }
            else if (lutador2.vida < 0) {
                console.log(`${Lutador2Nome} não tem vida o suficiente`);
                console.log(":-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:");
                console.log(`${Lutador1Nome} Venceu o duelo`);
            }

            break;




        default:
            break;
    }







}