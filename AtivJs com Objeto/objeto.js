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

imprimirInformacoes = function() {
    console.log("Título: " + this.titulo);
    console.log("Ano de Lançamento: " + this.anoLan);
    console.log("Diretor: " + this.diretor);
    console.log("Gênero: " + this.genero);
    console.log("Elenco:");
    console.log("- " + this.elenco.protagonista.nome + " como " + this.elenco.protagonista.atriz);
    console.log("- " + this.elenco.interesseR.nome + " como " + this.elenco.interesseR.ator);
  }

