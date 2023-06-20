import React from 'react'

const BABI = () => {
    return (
        <div className='h-screen md:mx-12 mx-8' id='bab1'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className="font-bold text-4xl">BAB I</h1>
                <h1 className="font-bold text-4xl text-center">Latar Belakang Lahirnya Reformasi</h1>
            </div>
            <div className='flex flex-col mt-10 p-4 bg-gray-200 rounded-xl shadow-lg'>
                <p className="mb-3 text-black text-xl">
                    Latar Belakang lahirnya Reformasi ditandai dengan krisi ekonomi dan politik pada akhir kekuasaaan Order Baru yang terjadi karena maraknya praktisi korupsi, kolusi, dan nepotisme (KKN) dan banyaknya beban utang negara yang tidak sanggup dibayar.
                </p>
                <div className='flex justify-center items-center my-5'>
                    <img src="./assets/img/img.jpg" alt="" className='h-auto' />
                </div>
                <p className="text-black text-xl">
                    Selain itu, kepemimpinan Soeharto yang sangat otoriter menimbulkan ketidakpuasan maysarkat Indonesia, ketidakpuasan tersebut yang kemudian menimbulkan demostrasi besar-besaran di seluruh Indonesia, yang melahirkan reformasi.
                </p>
            </div>
        </div>
    )
}

export default BABI
