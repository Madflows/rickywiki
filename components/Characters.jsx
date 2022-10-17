import React from 'react';

import { useQuery } from 'react-query';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {

    async function getCharacters () {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        return response.json()
    }

    const { data, isLoading, isError } = useQuery("characters", getCharacters)


   

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if (isError) {
        return (
            <p>Error</p>
        )
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 container mx-auto max-w-[800px]'>
        {
            data.results.map((character) => (
                <CharacterCard character={character} key={character.id} />
            ))
        }
    </div>
  )
}
