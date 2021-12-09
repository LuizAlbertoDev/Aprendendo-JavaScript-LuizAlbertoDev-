
var idade = 80

console.log(`Voce tem ${idade} anos.`)

if (idade < 18) {
    console.log("Voce Não Vota!")
}
    else if (idade < 18 || idade > 65) {
        console.log("Seu Voto é Opcional")
    }
    else {
        console.log("Seu Voto Obrigatorio!")
    }
