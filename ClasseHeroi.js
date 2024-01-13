class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atacar(){
        let attack
        if(this.type === "mago"){
            attack = "magia"
        }
        else if(this.type === "guerreiro"){
            attack = "espada"
        }
        else if(this.type === "monge"){
            attack = "artes marciais"
        }
        else if(this.type === "ninja"){
            attack = "shuriken"
        }
        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}

let pecado = new hero("Merlin", 3000, "mago")
let naruto = new hero("Sakura", 32, "ninja")

pecado.atacar()

naruto.atacar()