export interface Ipokemon {
  name: string,
  url: string
}

export default interface IpokemonType {
    type: {
      name: string
      url: string,
  };
}

export interface IpokemonDefaultObject {
  name: string,
  types: IpokemonType[];
  height: string;
  weight: string;
}

export interface IpokemonObject {
  name: string,
  type1: string,
  type2?: string,
  height: string,
  weight: string,
}



export interface Ifirst151Pokemons {
  results: Ipokemon[];
}

