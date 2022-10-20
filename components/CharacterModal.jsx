import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from 'context/ModalContext';

const CharacterModal = ({setShowModal}) => {
    const { activeCharacter } = useModal();
    const character = activeCharacter;


    return (
        <motion.div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-h-screen">
                <div onClick={() => setShowModal(false)} className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <div className='bg-white dark:bg-gray-800 border-2 z-50 border-gray-800 rounded-lg w-full max-w-sm p-8' role="dialog" aria-modal="true" aria-labelledby="character-modal">
                {character.name}

                </div>
            </div>
        </motion.div>
    )
}

export default CharacterModal