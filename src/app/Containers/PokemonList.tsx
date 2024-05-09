import React from 'react'
import styles from "./PokemonList.module.css";
import { TPokemon, TResults } from '@/utils/types';
import { Pokemon } from '../../Components/Pokemon';

const PokemonList = ({data}: {data: TResults}) => {

  return (
    <section className={styles.pokemonList}>
      {data.length 
        ? data.map((poke: TPokemon) => <Pokemon key={poke.url} name={poke.name} url={poke.url} />)
        : <div>No Pokemon</div>
      }
      
    </section>
  )
}

export default PokemonList