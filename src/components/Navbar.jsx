import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 w-full z-[150]'>
            <nav className="bg-black">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a className="flex items-center">
                        <img src="./assets/img/OIG.jpg" className="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Reformasi</span>
                    </a>
                </div>
            </nav>
            <nav className="bg-gray-50 ">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <a href="#bab1" className="text-gray-900 dark:text-white hover:underline" aria-current="page">BAB I</a>
                            </li>
                            <li>
                                <a href="#bab2" className="text-gray-900 dark:text-white hover:underline">BAB II</a>
                            </li>
                            <li>
                                <a href="#bab3" className="text-gray-900 dark:text-white hover:underline">BAB III</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
