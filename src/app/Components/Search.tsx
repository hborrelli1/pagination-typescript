import React from 'react'

type SearchProps = {
  data: string;
  handleSearch: (e:React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({data, handleSearch, handleChange}: SearchProps) => {

  

  return (
    <form>
      <input onChange={handleChange} type='text' placeholder='Search Pokemon' value={data}/>
      <button onClick={handleSearch}>Search</button>
    </form>
  )
}
