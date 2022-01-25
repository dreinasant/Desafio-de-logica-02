let idade = 21
if(idade > 18){
   console.log("Você é maior de idade, ja pode sair sozinho(a)!!")
}

let humana = true
if(idade > 18 && humana){
    console.log("Não sou um robo!")
}


let mes = "setembro"
if(mes == "janeiro" || mes == "setembro"){
    console.log("Que legal, você faz aniversario em setembro")
}

let nome = "Andreina"
if(nome.substring (0,1) == "R"){
    console.log("Seu nome começa com a letra R")
}else{
    console.log("Seu nome não começa com a letra R")
}


let sobreNome = "Santos"
nome = "Andreina"
if(sobreNome.length > 6 || nome.substring (0,1) == "E"){
    console.log(`${nome} seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E`)
}else{
    console.log(`${nome} seu sobrenome não tem mais de 6 letras ou seu nome não começa com a letra E`)
}