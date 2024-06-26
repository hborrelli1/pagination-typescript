import React, { Suspense } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import PokemonList from "./Containers/PokemonList";
import { Search } from "../Components/Search";
import { PaginationControls } from '@/Components/PaginationControls';

const PAGE_SIZE = '12';

export default async function Home({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  const page = searchParams['page'] ?? '1';
  const perPage = searchParams['per_page'] ?? PAGE_SIZE;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${PAGE_SIZE}&offset=${(Number(PAGE_SIZE) * (Number(page) - 1))}`);
  const pokeData = await response.json();
  
  const totalPageCount = Math.ceil(pokeData.count / Number(PAGE_SIZE));
  const start = (Number(page) - 1) * Number(perPage);
  // const end = start + Number(perPage)

  const data = {
    'page': page,
    'perPage': perPage,
    'totalPages': totalPageCount,
  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Searching....')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchState(e.target.value)
  }

  return (
    <main className={styles.main}>
        <h1>Pokemon</h1>
        <Search 
          data={data} 
          handleSearch={handleSearch} 
          handleChange={handleChange} 
        />
        <Suspense fallback="Loading...">
          <PokemonList data={pokeData.results}/>
        </Suspense>
        <PaginationControls 
          data={data} 
          hasNextPage={Number(page) < totalPageCount}
          hasPrevPage={start > 0}
        />
    </main>
  );
}
