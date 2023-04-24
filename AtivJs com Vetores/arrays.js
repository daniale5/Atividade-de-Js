function myLoja(){
    let estoque = []
    let vendidos = []
    let total = []
    estoque[0] = document.querySelector('input#est1').value
    console.log(estoque[0])
    vendidos[0] = document.querySelector('input#vend2').value
    console.log(vendidos[0])

    total[0] = estoque[0] - vendidos[0]

    alert("O número de unidades restantes em estoque é:  "+ total[0])
}