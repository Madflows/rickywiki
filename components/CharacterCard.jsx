import React from 'react'

export const CharacterCard = ({character}) => {
  return (
    <div className='rounded-md grid grid-cols-3 overflow-hidden bg-slate-200'>
        <img src={character.image} alt={character.name} />
        <div className='py-4 px-3 col-span-2'>
            <h3 className='font-bold text-lg'>{character.name}</h3>
        </div>
    </div>
  )
}
