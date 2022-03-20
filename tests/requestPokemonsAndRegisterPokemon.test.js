const sinon = require("sinon");
const { expect } = require("chai");
const { PokemonController } = require("../dist/controller/index");
const { PokemonService } = require("../dist/services/Pokemons");

describe('testa "requestPokemons" em caso de sucesso', () => {
	const response = {};
	const request = {};
	before(() => {
		response.status = sinon.stub().returns(response);
		response.json = sinon.stub().returns();
		sinon
			.stub(PokemonService, "requestPokemons")
			.resolves({ pokemons: "pokemons" });
	});

	after(() => {
		PokemonService.requestPokemons.restore();
	});

	it("é chamado o status com o código 200", async () => {
		await PokemonController.requestPokemons(request, response);
		expect(response.status.calledWith(200)).to.be.equal(true);
		expect(response.json.calledWith({ pokemons: "pokemons" })).to.be.equal(
			true
		);
	});
});

describe('testa "requestPokemons" em caso de erro', () => {
	const response = {};
	const request = {};
	var nextSpy = sinon.spy();
	before(() => {
		response.status = sinon.stub().returns(response);
		response.json = sinon.stub().returns();
		sinon.stub(PokemonService, "requestPokemons").throws("error");
	});

	after(() => {
		PokemonService.requestPokemons.restore();
	});

	it("é chamado o middleware de erro atravez da função next", async () => {
		await PokemonController.requestPokemons(request, response, nextSpy);
		expect(response.status.calledWith(200)).to.be.equal(false);
		expect(nextSpy.calledOnce).to.be.true;
	});
});

describe('testa "registerNewPokemon" em caso de sucesso', () => {
	const response = {};
	const request = {};
	before(() => {
    response.status = sinon.stub().returns(response);
		response.json = sinon.stub().returns();
    request.body = 'pokemons';
		sinon
			.stub(PokemonService, "registerNewPokemon")
			.resolves();
	});

	after(() => {
		PokemonService.registerNewPokemon.restore();
	});

  it('é chamado o status com o código 201', async () => {
    await PokemonController.registerNewPokemon(request, response);
		expect(response.status.calledWith(201)).to.be.equal(true);
		expect(response.json.calledWith('pokemons')).to.be.equal(
			true
		);
  })
})

describe('testa "registerNewPokemon" em caso de erro', () => {
	const response = {};
	const request = {};
	var nextSpy = sinon.spy();
	before(() => {
    response.status = sinon.stub().returns(response);
		sinon
			.stub(PokemonService, "registerNewPokemon").throws('error');
	});

	after(() => {
		PokemonService.registerNewPokemon.restore();
	});

  it('é chamado o middleWare de erro atravez da função next', async () => {
    await PokemonController.registerNewPokemon(request, response, nextSpy);
		expect(response.status.calledWith(201)).to.be.equal(false);
		expect(nextSpy.calledOnce).to.be.true;
  })
}) //