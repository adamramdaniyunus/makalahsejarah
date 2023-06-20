import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black  p-5  w-screen'>
            <div className='flex justify-end gap-x-1 items-center mr-4'>
                <a href="https://www.instagram.com/adamramdaniyunus/" className='text-white font-bold text-xl'><FaInstagram /></a>
                <a href='https://www.instagram.com/adamramdaniyunus/' className='text-white font-bold'>My Instagram</a>
            </div>
        </div>
    )
}

export default Footer
