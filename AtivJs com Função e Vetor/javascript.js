function Selecionar(){
    let nome = document.getElementById("nome").value
    let horas = document.getElementById("horas").value
    let final = document.getElementById("boo").value

    const proj = ["Nome do Projeto: " + nome]
    console.log(proj)
    document.getElementById("vetor").innerHTML = proj

    const projet = ["Quantidade de Horas: "+ horas]
    console.log(projet)
    document.getElementById("vet").innerHTML = projet

    const projetinho = [" Finalizado: "+ final]
    console.log(projetinho)
    document.getElementById("vetorzinho").innerHTML = projetinho
}
