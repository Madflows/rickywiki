import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { CharacterCard } from './CharacterCard';
import CharacterModal from './CharacterModal';

export const Characters = () => {

    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    async function getCharacters() {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response.json()
    }

    const { data, isLoading, error } = useQuery(["characters", page], getCharacters)





    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-slate-100 dark:bg-slate-900">

                <div className="loader dark:bg-white bg-slate-700 p-5 rounded-full flex space-x-3">
                    <div className="w-5 h-5 bg-slate-50 dark:bg-gray-800 rounded-full animate-bounce"></div>
                    <div className="w-5 h-5 bg-slate-50 dark:bg-gray-800 rounded-full animate-bounce"></div>
                    <div className="w-5 h-5 bg-slate-50 dark:bg-gray-800 rounded-full animate-bounce"></div>
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
        <>
            <AnimatePresence>
                {
                    showModal && <CharacterModal setShowModal={setShowModal} />
                }
            </AnimatePresence>
            <div className='grid grid-cols-1 gap-4 w-full container mx-auto max-w-[1020px] px-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                    {
                        data.results.map((character) => (
                            <CharacterCard character={character} setShowModal={setShowModal} key={character.id} />
                        ))
                    }
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <button disabled={data.info.prev === null} onClick={() => setPage(page - 1)} className='pagination-btn'>Previous</button>
                    <button disabled={data.info.next === null} onClick={() => setPage((current) => (current + 1))} className='pagination-btn'>Next</button>
                    <div>{page}/{data.info.pages}</div>
                </div>
            </div>
        </>
    )
}
