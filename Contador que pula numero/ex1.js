function executar(){

let N1 = Number(document.getElementById('N1').value)
let N2 = Number(document.getElementById('N2').value)
let jump = Number(document.getElementById('jump').value)
let res = 0


if (N2 > N1 && (N2 <= 0 || N2 >= 0)) {
    resposta.innerHTML = ` ${N1} \u{1F449} `
    if (jump > 0) {

        number = N1

        for (res = N1; res <= (N2 - jump); res += jump) {
            number += jump
            resposta.innerHTML += ` ${number} \u{1F449} `
        }
        resposta.innerHTML += ` \u{1F9BE} `
    }else{
        window.alert('[ERRO] Adicione um valor maior que 0 no Pulando')
    }
    
}else{
    window.alert('[ERRO] Coloque um numero válido')
}



}