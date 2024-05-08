export type TPokemon = {
  name: string;
  url: string;
}

export type TSearchData = {
  'page': string | string[];
  'perPage': string | number | string[];
  'start': number;
  'end': number;
  'totalPages': number;
}

export type TResults = {
  name: string;
  url: string;
}[]