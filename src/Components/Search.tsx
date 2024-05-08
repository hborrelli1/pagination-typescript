import React from 'react'
import { TSearchData } from '@/utils/types'

type TSearchProps = {
  data: TSearchData;
  handleSearch: (e:React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({data, handleSearch, handleChange}: TSearchProps) => {

  

  return (
    <form>
      {/* <input onChange={handleChange} type='text' placeholder='Search Pokemon' value={data}/>
      <button onClick={handleSearch}>Search</button> */}
    </form>
  )
}
