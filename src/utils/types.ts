export type TPokemon = {
  name: string;
  url: string;
}

export type TSearchData = {
  'page': string | string[];
  'perPage': string | number | string[];
  'totalPages': number;
}

export type TResults = {
  name: string;
  url: string;
}[]

export type TPokemonTypes = {
  slot: number; 
  type: {
    name:string
  }
}