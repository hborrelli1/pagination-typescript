import React from 'react'
import { TPokemon, TPokemonTypes } from '@/utils/types';
import Image from 'next/image';

export const Pokemon = async ({name, url}: TPokemon) => {

  const prettifyName = (name:string) => 
    name.charAt(0).toUpperCase() + name.slice(1);

  const pokemonData = await fetch(url);
  const response = await pokemonData.json();

  const types = response.types
  const imageUrl = response.sprites['front_default'];

  return (
    <div>
      <h2>{prettifyName(name)}</h2>
      <Image 
        alt={`${prettifyName(name)} thumbnail image`} 
        height={200}
        width={200}
        src={imageUrl} 
      />
      <ul>
        {types.map((t: TPokemonTypes) => <li key={t.slot}>{t.type.name}</li>)}
      </ul>
    </div>
  )
}
