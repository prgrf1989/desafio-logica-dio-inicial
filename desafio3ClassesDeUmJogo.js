class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    tipoDeAtaque(tipo){
        switch(tipo){
            case "mago":
                return "magia"
            break
            case "guerreiro":
                return "espada"
            break
            case "monge":
                return "artes maciais"
            break
            case "ninja":
                return "shuriken"
            break
            default:
                return "ataque inválido"
        }
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.tipoDeAtaque(this.tipo)}`)
    }
}

let magoCharles = new heroi("Charles", 8, "mago")
magoCharles.atacar()

let bruceLee = new heroi("Bruce", 23, "ninja")
bruceLee.atacar()