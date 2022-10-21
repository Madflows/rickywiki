import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from 'context/ModalContext';
import { Heart } from 'iconsax-react';

const CharacterModal = ({ setShowModal }) => {
    const { activeCharacter } = useModal();
    const character = activeCharacter;


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-h-screen">
                <div onClick={() => setShowModal(false)} className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-slate-900 opacity-75" />
                </div>
                <div className='bg-white dark:bg-gray-800 border-2 z-50 border-gray-800 rounded-lg w-full max-w-sm p-4 md:p-8' role="dialog" aria-modal="true" aria-labelledby="character-modal">
                    <ModalContent character={character} />
                </div>
            </div>
        </motion.div>
    )
}

function ModalContent({ character }) {
    return (
        <div className='grid grid-cols-1 w-full gap-3'>
            <div className='flex items-center justify-start gap-4'>
                <img src={character.image} alt={character.name} width="30" height={30} className="w-[50px] h-[50px] rounded-full border-2 border-violet-600" />

                <div className="flex flex-col items-start">
                    <h2 className='text-3xl font-black'>{character.name}</h2>
                    <div className='flex items-center gap-2'>
                        <p className="font-bold">{character.gender}</p>
                        <span>&#x2022;</span>
                        <a target={"_blank"} rel="noreferrer" href={`https://en.wikipedia.org/wiki/${character.species}`} className='font-bold underline decoration-dashed underline-offset-4 hover:decoration-solid'>{character.species}</a>
                    </div>
                </div>
            </div>
            <hr className='border-b-2' />
            <div className='font-bold grid grid-cols-2 gap-2'>
                <div className='bg-slate-200 dark:bg-slate-700 rounded-md py-2 px-2'>
                    <p>Origin</p>
                    <span className='text-sm'>{character.origin.name}</span>
                </div>
                <div className='bg-slate-200 dark:bg-slate-700 rounded-md py-2 px-2'>
                    <p>Location</p>
                    <span className='text-sm'>{character.location.name}</span>
                </div>
                <div className='col-span-2 flex flex-col mt-2 bg-slate-200 dark:bg-slate-700 rounded-md p-3 items-center justify-center'>
                    <Heart size="22" className='dark:text-emerald-200 text-emerald-700' variant="Bulk" />
                    <p className='text-sm'>{character.status}</p>
                </div>
            </div>
        </div>
    )
}



export default CharacterModal