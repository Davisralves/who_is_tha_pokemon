const sinon = require("sinon");
const { expect } = require("chai");
const { PokemonController } = require("../dist/controller/index");
const { PokemonService } = require("../dist/services/Pokemons");

describe('testa "requestPokemons" em caso de sucesso', () => {
	const response = {};
	const request = {};
	const next = () => "";
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
		await PokemonController.requestPokemons(request, response, next);
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
	const error = { status: 500, message: "error" };
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

it('é chamado o send com a mensagem "Dados inválidos"', async () => {
	await MoviesController.create(request, response);

	expect(response.send.calledWith("Dados inválidos")).to.be.equal(true);
});
