
let amigo = {nome: "jose", sexo: "M", peso: 85.4, engordar(p=0){
    console.log("engordou")
    this.peso += p
}}
  
//engordar 2 kilos (2)
amigo.engordar(2)


console.log(`${amigo.nome} pesa ${amigo.peso}KG`)