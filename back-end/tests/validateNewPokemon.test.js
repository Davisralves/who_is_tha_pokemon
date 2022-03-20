const sinon = require("sinon");
const { expect } = require("chai");
const { PokemonController } = require("../dist/controller/index");
const { PokemonService } = require("../dist/services/Pokemons");

describe('testa "validateNewPokemon" no caso de já existir um pokemon na banco de dados', () => {
	const response = {};
	const request = {}
  request.body = ['item 1', { name: 'S', type1: 'S', type2: 'S',weight: 'S', height: 'S', img:'S' }]
  const nextSpy = sinon.spy()
	before(() => {
		sinon
			.stub(PokemonService, "getPokemonByName")
			.resolves([{foundedPokemon: 'pikachu'}]);
	});

	after(() => {
		PokemonService.getPokemonByName.restore();
	});

	it("É chamada a função next com erro", async () => {
		await PokemonController.validateNewPokemon(request, response, nextSpy);
		expect(nextSpy.calledOnce).to.be.true;
		expect(nextSpy.args[0][0].status).to.be.equals(400);
		expect(nextSpy.args[0][0].message).to.be.equals("Name alredy exist");
	});
});

describe('testa "validateNewPokemon" recebendo valores invalidos', () => {
  const response = {};
	const request = {};
  request.body = ['item 1', { name: 2, type2: false, weight: 'S', height: 'S', img:'S' }]
  const nextSpy = sinon.spy()
  const error = {
    status: 400,
    message: "All values should be a string" };
    
	before(() => {
		sinon
			.stub(PokemonService, "getPokemonByName")
			.resolves([]);
	});

	after(() => {
		PokemonService.getPokemonByName.restore();
	});

	it("É chamada a função next é chamada com um status 400", async () => {
		await PokemonController.validateNewPokemon(request, response, nextSpy);
		expect(nextSpy.calledOnce).to.be.true;
		expect(nextSpy.args[0][0].status).to.be.equals(error.status);
		expect(nextSpy.args[0][0].message).to.be.equals(error.message);
	});
});

describe('testa "validateNewPokemon" recebendo valores esperados', () => {
	const response = {};
	const request = {}
  request.body = ['item 1', { name: 'S', type1: 'S', type2: 'S',weight: 'S', height: 'S', img:'S' }]
  const nextSpy = sinon.spy()
	before(() => {
		sinon
			.stub(PokemonService, "getPokemonByName")
			.resolves([]);
	});

	after(() => {
		PokemonService.getPokemonByName.restore();
	});

	it("É chamada a função next vazia", async () => {
		await PokemonController.validateNewPokemon(request, response, nextSpy);
		expect(nextSpy.calledOnce).to.be.true;
		expect(nextSpy.calledWith()).to.be.true;
	});
});