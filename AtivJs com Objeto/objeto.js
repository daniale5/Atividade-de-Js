let filme = {
	titulo:"Jogos Vorazes",
	anoLan:2012,
	diretor:"Gary Ross",
	genero:"ação",
	elenco: {
		principal: {
            nome:"Katniss Everdeen",
            atriz:"Jennifer Shrader Lawrence",
        },
        interesseR:{
            nome:"Peeta Mellark",
            ator:"Josh Hutcherson"
        },
        secundaria: {
            nome:"Effie Trinket",
            atriz:"Elizabeth Banks"
        },
        secundario: {
            nome:"Haymitch Abernathy",
            atriz:"Woody Harrelson"
        }
	}
}

console.log(filme.titulo)
console.log(filme.anoLan)

console.log(filme.elenco.principal.nome);
