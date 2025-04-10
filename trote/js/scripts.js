function calcular(){
    let soma = 0
    let sangue = 0
    let pontosSangue = 0

    // recupera o valor da ação social digitado // // declaração variável sem tipo //  
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)

    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))

    let kit = Number(document.getElementById("kit").value)

    let suplemento = document.getElementById("suplemento").value
    soma = soma + Number(15 * Number(suplemento))

    let pacoteArroz5kg = document.getElementById("pacoteArroz5kg").value
    soma = soma + Number(5 * Number(pacoteArroz5kg))

    let pacoteArroz1kg = document.getElementById("pacoteArroz1kg").value
    soma = soma + Number(pacoteArroz1kg)

    let pacoteFeijao2kg = document.getElementById("pacoteFeijao2kg").value
    soma = soma + Number(2 * pacoteFeijao2kg)

    let pacoteFeijao1kg = document.getElementById("pacoteFeijao1kg").value
    soma = soma + Number(pacoteFeijao1kg)

    let pacoteMacarrao = document.getElementById("pacoteMacarrao").value
    soma = soma + Number(pacoteMacarrao / 2)

    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    // recupera a cor da equipe //
    let equipe = document.getElementById("equipe").value

    //guarda pontuação de kit //
    let pontosKitSuple = 0 

    if(equipe == "Laranja") {
        if (kit >= 97 && suplemento >= 49){
            pontosKitSuple = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKitSuple = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            pontosKitSuple = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10) {
            pontosKitSuple = 1000 + ((kit - 19) * 30) + ((suplemento -10) * 15)
        }
    }

    else if(equipe == "Preta") {
        if (kit >= 103 && suplemento >= 52){
            pontosKitSuple = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            pontosKitSuple = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15) 
        }
        else if (kit >= 52 && suplemento >= 26) {
            pontosKitSuple = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10) {
            pontosKitSuple = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
    }

    else if(equipe == "Roxa") {
        if (kit >= 102 && suplemento >= 51){
            pontosKitSuple = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41){
            pontosKitSuple = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >= 26) {
            pontosKitSuple = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20 && suplemento >= 10) {
            pontosKitSuple = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
        }
    }

    else if(equipe == "Verde") {
        if (kit >= 88 && suplemento >= 44){
            pontosKitSuple = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if (kit >= 70 && suplemento >= 35){
            pontosKitSuple = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44 && suplemento >= 22) {
            pontosKitSuple = 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
        }
        else if (kit >= 18 && suplemento >= 9) {
            pontosKitSuple = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }
    }
    
    else{
        if (kit >= 88 && suplemento >= 47){
            pontosKitSuple = 5000 + ((kit - 88) * 30) + ((suplemento - 47) * 15)
        }
        else if (kit >= 70 && suplemento >= 38){
            pontosKitSuple = 4000 + ((kit - 70) * 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 44 && suplemento >= 24) {
            pontosKitSuple = 2500 + ((kit - 44) * 30) + ((suplemento - 24) * 15)
        }
        else if (kit >= 18 && suplemento >= 9) {
            pontosKitSuple = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }
    }
    soma = soma + pontosKitSuple

    sangue = Number(document.getElementById("sangue").value)
    if(equipe == "Laranja"){
        if(sangue >= 49){
            pontosSangue = 2500 + ((sangue - 49)* 20)
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else if(equipe == "Preta"){
        if (sangue >= 52){
            pontosSangue = 2500 + ((sangue - 52)* 20)
        }
        else{
            pontosSangue = sangue * 20
        }
        
    }
    else if(equipe == "Roxa"){
        if(sangue >= 51){
            pontosSangue = 2500 + ((sangue - 51)* 20)
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else if(equipe == "Verde"){
        if(sangue >= 44){
            pontosSangue = 2500 + ((sangue - 44)* 20)
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else{
        if(sangue >= 47){
            pontosSangue = 2500 + ((sangue - 47)* 20)
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    soma = soma + pontosSangue
    //devolve o resultado para o HTML //
    document.getElementById("soma").innerHTML = `${soma.toFixed(2)}`
}