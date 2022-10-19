import React, {useState} from 'react';

import { useQuery } from 'react-query';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {

    const [ page, setPage ] = useState(1);

    async function getCharacters() {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response.json()
    }

    const { data, isLoading, error } = useQuery(["characters", page], getCharacters)





    if (isLoading) {
        return (
            <div class="min-h-screen flex justify-center items-center bg-slate-900">

                <div class="loader bg-white p-5 rounded-full flex space-x-3">
                    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                </div>

            </div>
        )
    }

    if (error) {
        return (
            <p>Error</p>
        )
    }

    return (
       <div className='grid grid-cols-1 gap-4 w-full container mx-auto max-w-[1020px] px-3'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            {
                data.results.map((character) => (
                    <CharacterCard character={character} key={character.id} />
                ))
            }
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <button disabled={data.info.prev === null} onClick={() => setPage(page - 1)} className='pagination-btn'>Previous</button>
            <button disabled={data.info.next === null} onClick={() => setPage((current) => (current + 1))} className='pagination-btn'>Next</button>
            <div>{page}/{data.info.pages}</div>
        </div>
       </div>
    )
}
