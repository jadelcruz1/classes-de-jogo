let nome = "";
let idade = 0;
let tipoDeLutador;


class Zelda {   
    constructor(){
        this.tipoDeLutador = tipoDeLutador;
        this.idade =idade;
        this.nome = nome;
    }

     atacar(tipoDeLutador){
 

        if (tipoDeLutador == "Mago" ){
            console.log(`O ${nome} ${tipoDeLutador} atacou usando magia.`);
        } else if (tipoDeLutador == "guerreiro") {
            console.log(`O ${tipoDeLutador} atacou usando espada.`);
            
        } else if (tipoDeLutador == "monge") {
            console.log(`O ${tipoDeLutador} atacou usando artes marciais.`);
            
        } else if (tipoDeLutador == "ninja") {
            console.log(`O ${tipoDeLutador} atacou usando shuriken.`)
            
        }
    } 
}


let classe = new Zelda();

classe.atacar("monge")