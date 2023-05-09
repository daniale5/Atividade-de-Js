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
},
    
imprimirInfo = function() {
    console.log("Título: "+ this.titulo);
    console.log("Ano de lançamento: "+ this.filme.anoLan);
    console.log("Diretor: "+ this.diretor);
}
