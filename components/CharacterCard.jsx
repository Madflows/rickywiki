import { Eye, Ghost } from 'iconsax-react';
import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from '../styles/card.module.css';


export const CharacterCard = ({ character }) => {
    return (
        <div className='rounded-md grid grid-cols-3 overflow-hidden bg-slate-800 text-slate-50'>
            <img src={character.image} alt={character.name} />
            <div className='py-2 px-3 col-span-2 flex flex-col gap-2'>
                <div className='flex items-end gap-3'>

                    <h3 className='font-bold text-xl'>{character.name}</h3>
                    <small className='font-bold rounded bg-emerald-500 px-3'>{character.species}</small>
                </div>
                <br />
                <div className='grid grid-cols-2 w-full gap-4'>
                    <div className={styles.stats} data-tip="Last seen on" content="Last seen" interactive={true} interactiveBorder={20} delay={100}>

                        <p className='flex items-center gap-2 font-bold'><Eye size={30} variant="Bulk" /></p>
                        <p> {character.location.name}</p>

                    </div>

                    <div className={styles.stats} data-tip="Status" content="Status" interactive={true} interactiveBorder={20} delay={100}>

                        <p className='flex items-center gap-2 font-bold'><Ghost size={30} variant="Bulk" /></p>
                        <p> {character.status}</p>

                    </div>
                </div>
                <ReactTooltip place="top" type="dark" effect="solid"/>
            </div>
        </div>
    )
}
