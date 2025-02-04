import React from 'react'

const Footer = () => {
    return (
        <nav className='flex justify-around bg-slate-800 text-white py-4'>
            <div className='logo font-bold'>
                Facebook
            </div>
            <ul className='flex gap-6'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </ul>

        </nav>
    )
}

export default Footer