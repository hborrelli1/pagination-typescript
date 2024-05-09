import React from 'react'
import { TPokemon, TPokemonTypes } from '@/utils/types';
import Image from 'next/image';
import styles from './Pokemon.module.css'
import { pokemonTypesColors } from '@/utils/type-colors';

export const Pokemon = async ({name, url}: TPokemon) => {

  const prettifyName = (name:string) => 
    name.charAt(0).toUpperCase() + name.slice(1);

  const pokemonData = await fetch(url);
  const response = await pokemonData.json();

  const types = response.types
  const imageUrl = response.sprites['front_default'];

  return (
    <div className={styles.pokemon} id='pokeBackground'>
      <h2>{prettifyName(name)}</h2>
      <Image 
        alt={`${prettifyName(name)} thumbnail image`} 
        height={100}
        width={100}
        src={imageUrl} 
      />
      <ul className={styles.pokemonTypes}>
        {types.map((t: TPokemonTypes) => (
          <li 
            className={styles.type} 
            key={t.slot}
            style={{backgroundColor: pokemonTypesColors[t.type.name]}}
          >
            {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  )
}
