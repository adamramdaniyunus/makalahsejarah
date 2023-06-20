import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black bottom-0 p-5'>
            <div className='flex justify-end gap-x-1 items-center'>
                <a href="https://www.instagram.com/adamramdaniyunus/" className='text-white font-bold text-xl'><FaInstagram /></a>
                <a href='https://www.instagram.com/adamramdaniyunus/' className='text-white font-bold'>My Instagram</a>
            </div>
        </div>
    )
}

export default Footer
