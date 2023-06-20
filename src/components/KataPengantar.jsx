import React from 'react'

const KataPengantar = () => {
    return (
        <div className='flex justify-between mt-12 py-14 flex-col lg:flex-row px-14' data-aos="zoom-in-out">
            <div className='p-4 w-full flex justify-center items-center'>
                <img className="h-auto max-w-lg rounded-lg" src="./assets/img/goku.jpg" alt="" />
            </div>
            <div className="flex flex-col mt-2 items-center md:items-start leading-normal">
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-3xl">Kata Pengantar</h5>
                <p className="mb-3 text-gray-800 md:text-2xl text-lg">Dengan nama Allah Yang Maha Pengasih dan Penyayang, puji syukur Saya panjatkan ke hadirat-Nya atas segala rahmat, hidayah, dan karunia-Nya yang melimpah. Shalawat serta salam semoga tetap tercurah kepada junjungan kita, Nabi Muhammad SAW, yang telah membawa cahaya petunjuk dalam kehidupan umat manusia.</p>
                <p className="text-gray-800 md:text-2xl text-lg">Dalam kesempatan ini, dengan penuh kehormatan dan tanggung jawab, Saya mempersembahkan makalah yang membahas mengenai reformasi di Indonesia. Makalah ini ditujukan sebagai upaya untuk memahami secara detail dan mendalam tentang proses serta dampak perubahan yang terjadi selama periode reformasi yang penting dalam sejarah bangsa kita.</p>
            </div>
        </div>
    )
}

export default KataPengantar
