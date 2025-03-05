import { Link } from '@inertiajs/react';
import React from 'react'
import { BsHeartFill } from 'react-icons/bs';

export const Footer = () => {
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel App';
  return (
    <footer className='mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-0'>
        <Link className='font-medium text-foreground' href='/'>
        &copy; {appName} {new Date().getFullYear()}
        </Link>
        <span className='flex items-center gap-1 text-secondary-foreground'>
            Build with <BsHeartFill className='text-sm text-red' /> By ABC
        </span>
    </footer>
  )
}
