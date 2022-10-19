import { Eye, Ghost } from 'iconsax-react';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Modal from './Modal'

import styles from '../styles/card.module.css';


export const CharacterCard = ({ character }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <div className='rounded-md grid grid-cols-5 overflow-hidden bg-slate-800 text-slate-50'>
                <img src={character.image} alt={character.name} className="h-full col-span-2" />
                <div className='py-2 px-3 col-span-3 md:col-span-2 flex flex-col gap-2'>
                    <div className='flex flex-col justify-start sm:flex-row items-start sm:items-center sm:justify-between gap-3'>

                        <h3 onClick={() => setShowModal(true)} className='font-bold cursor-pointer text-xl'>{character.name}</h3>
                        <small className='font-bold rounded bg-emerald-500 px-3'>{character.species}</small>
                    </div>
                    <br />
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full md:gap-4'>
                        <div className={styles.stats} data-tip="Last seen on" >

                            <p className='flex items-center gap-2 font-bold text-white'><Binoculars /></p>
                            <p> {character.location.name}</p>

                        </div>

                        <div className={styles.stats} data-tip="Status">

                            <p className='flex items-center gap-2 font-bold text-white'><Ghost size={30} variant="Bulk" /></p>
                            <p> {character.status}</p>

                        </div>
                    </div>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                    {showModal && <Modal
                        onClose={() => setShowModal(false)}
                    >
                        <h2>
                            {character.name}

                        </h2>
                    </Modal>}
                </div>
            </div>
        </>
    )
}


export const Binoculars = () => (
    <svg
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30px"
        height="30px"
    >
        <path d="M 11 5 C 9.03125 5 7.460938 6.441406 7.125 8.3125 C 5.234375 8.789063 3.59375 10.019531 2.875 11.96875 L 2.84375 11.96875 L 0.71875 17.9375 C 0.265625 18.863281 0 19.902344 0 21 C 0 24.855469 3.144531 28 7 28 C 10.472656 28 13.367188 25.449219 13.90625 22.125 C 14.449219 22.660156 15.1875 23 16 23 C 16.8125 23 17.550781 22.660156 18.09375 22.125 C 18.632813 25.449219 21.527344 28 25 28 C 28.855469 28 32 24.855469 32 21 C 32 20.027344 31.800781 19.09375 31.4375 18.25 L 29.15625 11.875 L 29.125 11.84375 L 29.125 11.8125 C 28.394531 10.039063 26.777344 8.800781 24.875 8.3125 C 24.539063 6.441406 22.96875 5 21 5 C 19.144531 5 17.636719 6.285156 17.1875 8 L 14.8125 8 C 14.363281 6.285156 12.855469 5 11 5 Z M 11 7 C 12.191406 7 13 7.808594 13 9 L 13 10 L 19 10 L 19 9 C 19 7.808594 19.808594 7 21 7 C 22.191406 7 23 7.808594 23 9 L 23 9.90625 L 23.90625 10 C 25.390625 10.15625 26.671875 11.191406 27.25 12.53125 C 27.257813 12.550781 27.273438 12.574219 27.28125 12.59375 L 28.03125 14.71875 C 27.113281 14.273438 26.085938 14 25 14 C 22.074219 14 19.574219 15.816406 18.53125 18.375 C 17.996094 17.542969 17.050781 17 16 17 C 14.949219 17 14.003906 17.542969 13.46875 18.375 C 12.425781 15.816406 9.925781 14 7 14 C 5.929688 14 4.910156 14.253906 4 14.6875 L 4.75 12.65625 L 4.75 12.625 C 5.332031 11.078125 6.558594 10.160156 8.09375 10 L 9 9.90625 L 9 9 C 9 7.808594 9.808594 7 11 7 Z M 7 16 C 9.773438 16 12 18.226563 12 21 C 12 23.773438 9.773438 26 7 26 C 4.226563 26 2 23.773438 2 21 C 2 20.292969 2.175781 19.640625 2.4375 19.03125 C 2.453125 18.992188 2.453125 18.945313 2.46875 18.90625 C 3.257813 17.191406 4.980469 16 7 16 Z M 25 16 C 27.773438 16 30 18.226563 30 21 C 30 23.773438 27.773438 26 25 26 C 22.226563 26 20 23.773438 20 21 C 20 18.226563 22.226563 16 25 16 Z M 16 19 C 16.5625 19 17 19.4375 17 20 C 17 20.5625 16.5625 21 16 21 C 15.4375 21 15 20.5625 15 20 C 15 19.4375 15.4375 19 16 19 Z" />
    </svg>
)
