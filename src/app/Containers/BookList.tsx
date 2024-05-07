"use client"
import React, { useEffect, useState } from 'react'
import styles from "./BooksList.module.css";
import data from '../../../public/data/books.json'
import {Pokemon} from '../Components/Pokemon';

const PAGE_SIZE = 10;

const BookList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchData();
  },[currentPage])

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${PAGE_SIZE}&offset=${currentPage}`);
    const newData = await response.json();
    console.log('newData:', newData)
    setPokemon(newData.results)
  }

  return (
    <section className={styles.booksList}>
      {pokemon.length 
        ? pokemon.map((poke: IPokemon) => <Pokemon key={poke.url} name={poke.name} url={poke.url} />)
        : <div>No Pokemon</div>
      }
    </section>
  )
}

export default BookList