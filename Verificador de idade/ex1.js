function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade <= 13){
                    //Criança
                    img.setAttribute('src', 'kidBoy.png')
                }else if (idade < 19){
                    //Jovem
                    img.setAttribute('src', 'boy.png')
                }else if (idade < 55){
                    //Adulto
                    img.setAttribute('src', 'men.png')
                }else{
                    //Velho
                    img.setAttribute('src', 'oldMen.png')
                }


        }else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade <= 13){
                    //Criança
                    img.setAttribute('src', 'kidGirl.png')
                }else if (idade < 19){
                    //Jovem
                    img.setAttribute('src', 'girl.png')
                }else if (idade < 55){
                    //Adulto
                    img.setAttribute('src', 'woman.png')
                }else{
                    //Velho
                    img.setAttribute('src', 'oldWoman.png')
                }

        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Essa pessoa tem ${idade} anos`
        res.appendChild(img)
    }

}