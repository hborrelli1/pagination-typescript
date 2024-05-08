"use client"
import React, { useEffect, useState } from 'react'
import styles from "./PokemonList.module.css";
import data from '../../../public/data/books.json'
import { TPokemon } from '@/utils/types';
import { Pokemon } from '../Components/Pokemon';

const PAGE_SIZE = 10;

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${PAGE_SIZE}&offset=${currentPage}`);
      const newData = await response.json();
      console.log('newData:', newData)
      setPokemon(newData.results)
    }

    fetchData();
  },[currentPage])

  

  return (
    <section className={styles.booksList}>
      {pokemon.length 
        ? pokemon.map((poke: TPokemon) => <Pokemon key={poke.url} name={poke.name} url={poke.url} />)
        : <div>No Pokemon</div>
      }
    </section>
  )
}

export default PokemonList