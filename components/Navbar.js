import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
      <div className='logo font-bold'>
        Facebook
      </div>
      <ul className='flex gap-6'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>

    </nav>
  );
}

export default Navbar;
