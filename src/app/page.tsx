"use client"
import React, {useState} from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import PokemonList from "./Containers/PokemonList";
import { Search } from "./Components/Search";

export default function Home() {
  const [searchState, setSearchState] = useState<string>('');

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Searching....')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value)
  }

  return (
    <main className={styles.main}>
       <section>
        <h1>Books</h1>
        <Search 
          data={searchState} 
          handleSearch={handleSearch} 
          handleChange={handleChange} 
        />
        <PokemonList />
       </section>
    </main>
  );
}
