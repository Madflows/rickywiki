import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from 'context/ModalContext';

const CharacterModal = ({ setShowModal }) => {
    const { activeCharacter } = useModal();
    const character = activeCharacter;


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-h-screen">
                <div onClick={() => setShowModal(false)} className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-slate-900 opacity-75" />
                </div>
                <div className='bg-white dark:bg-gray-800 border-2 z-50 border-gray-800 rounded-lg w-full max-w-sm p-8' role="dialog" aria-modal="true" aria-labelledby="character-modal">
                    <ModalContent character={character} />
                </div>
            </div>
        </motion.div>
    )
}

function ModalContent({ character }) {
    return (
        <div className='grid grid-cols-1 w-full gap-3'>
            <div className='flex items-center justify-between'>
                <img src={character.image} alt={character.name} classNamw="w-5 h-5 rounded-full border-2 border-violet-600" />

                <div className="flex flex-col items-start">
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                </div>
            </div>
        </div>
    )
}



export default CharacterModal