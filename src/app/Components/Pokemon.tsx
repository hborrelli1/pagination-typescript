import React from 'react'
import { TPokemon } from '@/utils/types';

export const Pokemon= ({name, url}: TPokemon) => {

  const prettifyName = (name:string) => 
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>{prettifyName(name)}</div>
  )
}
