function myLoja(){
    let estoque = []
    let vendidos = []
    let total = []
    estoque[0] = document.querySelector('input#est1').value
    console.log(estoque[0])
    vendidos[0] = document.querySelector('input#vend1').value
    console.log(vendidos[0])

    total[0] = estoque[0] - vendidos[0]

    alert("O número de unidades restantes em estoque de Percy Jackson é:  "+ total[0])

    let estoquehp = []
    let vendidoshp = []
    let totalhp = []
    estoquehp[0] = document.querySelector('input#est2').value
    console.log(estoque[0])
    vendidoshp[0] = document.querySelector('input#vend2').value
    console.log(vendidos[0])

    totalhp[0] = estoquehp[0] - vendidoshp[0]

    alert("O número de unidades restantes em estoque de Harry Potter é:  "+ totalhp[0])
}