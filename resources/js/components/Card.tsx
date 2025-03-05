import React from 'react'
import { Service } from './Services'
import { Link } from '@inertiajs/react'

export const Card = ({
    title,description,imageUrl,href,premium
}:Service) => {
  return (
    <Link href={href} className='flex relative flex-col gap-2 rounded-lg border-2 border-transparent hover:border-red focus:border-red bg-background p-4 text-center shadow outline-none transition-all
    hover:scale-105 dark:bg-secondary dark:shadow-black/25 lg:max-w-xs'>
        <div className='mx-auto'>
            <img src={imageUrl} alt={title} />
        </div>
        <h5 className='text-xl font-semibold'>{title}</h5>
        <p className='text-sm text-foreground/60'>{description}</p>
        {premium && (
            <span className='absolute right-4 top-4 rounded-lg border border-red px-2 py-1 text-xs font-semibold leading-3 text-red'>
                upgrade
            </span>
        )}
    </Link>
  )
}
