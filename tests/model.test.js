const { expect } = require("chai");
const { connection } = require("../dist/models/connection");
const sinon = require("sinon");
const { PokemonsModel } = require("../dist/models/Pokemons");

describe("Testa funcionamento das funções com o banco de dados", () => {
	const pokemons = [
		{
			name: "pikachu",
			type1: "eletric",
			type2: "none",
			height: "7",
			weight: "5",
			img: "url.com",
		},
		{
			name: "bulbasaur",
			type1: "grass",
			type2: "none",
			height: "7",
			weight: "5",
			img: "url.com",
		},
	];

	before(async () => {
		sinon.stub(connection, "execute").resolves(pokemons);
	});

	after(async () => {
		connection.execute.restore();
	});

	describe('quando "getAll" é requisitado os pokemons são retornados corretamente para o services', () => {
		it("retorna a uma objeto", async () => {
			const response = await PokemonsModel.getAll();
			expect(response).to.be.a("object");
		});
		it("Retorna ao objeto pokemons", async () => {
			const reponse = await PokemonsModel.getAll();
			expect(reponse).to.have.a.property('name');
			expect(reponse).to.have.a.property('type1');
			expect(reponse).to.have.a.property('type2');
			expect(reponse).to.have.a.property('weight');
			expect(reponse).to.have.a.property('height');
			expect(reponse).to.have.a.property('img');
		});
	});
});
