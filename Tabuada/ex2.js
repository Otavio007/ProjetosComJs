function executar(){
    let N1 = document.getElementById('N')
    let res = document.getElementById('seltab')

    if (N1.value.length == 0) {
        window.alert('Por favor digite um número válido!')
    }else{
        let n = Number(N1.value)
        for (let i = 0; i <= 10; i++) {    
            let item = document.createElement('option')
            item.text = `${i} X ${n} = ${i*n}`
            res.appendChild(item)
            
        }    
    }  
}