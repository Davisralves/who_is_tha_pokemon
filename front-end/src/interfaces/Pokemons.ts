export interface IpokemonObject {
  name: string,
  type1: string,
  type2?: string,
  height: string,
  weight: string,
}

export interface IpokemonObjects extends Array<IpokemonObject>{};

