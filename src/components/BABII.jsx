import React, { useEffect } from 'react';
import { TweenLite, Expo, gsap } from 'gsap';

gsap.registerPlugin(gsap.CSSPlugin);
const BABII = () => {
    let count = 0;

    const handleClick = (card) => {
        if (count < 7) {
            card.classList.remove('top');
            card.classList.add('bottom');
            count++;
        } else if (count === 7) {
            const div = document.querySelectorAll('div');
            for (let i = 0; i < div.length; i++) {
                div[i].classList.remove('bottom');
            }
            count = 0;
        }
        shuffle(card);
    };

    const shuffle = (card) => {
        const duration = 1;
        const start = {
            x: 410,
            y: -15,
            ease: Expo.easeOut
        };
        const end = {
            x: 0,
            y: 0,
            ease: Expo.easeIn
        };
        TweenLite.fromTo(card, duration, start, end);
    };

    useEffect(() => {
        const images = document.querySelectorAll('.images');
        images.forEach((image) => {
            image.addEventListener('click', () => handleClick(image));
        });
    }, []);

    return (
        <div className='flex justify-between flex-col md:mt-48 mx-8 md:mx-10 mt-96' id='bab2'>
            <div className='py-6 flex flex-col'>
                <h1 className='text-4xl font-bold flex justify-center items-center'>
                    BAB II
                </h1>
                <h1 className='text-4xl font-bold flex justify-center text-center items-center'>
                    Kebijakan Ekonomi Pada masa Reformasi
                </h1>
            </div>

            <div className='flex flex-col p-4 bg-gray-200 rounded-xl shadow-xl'>
                <p className='text-xl mb-3'>
                    Pada Masa Reformasi, Indonesia tengah menghadapi krisis ekonomi. Berbagai upaya dilakukan untuk memulihkan kembali ekonomi
                </p>
                <p className='text-xl font-semibold'>Pemerintahan Presiden BJ Habibie</p>
                <p className='text-xl mb-3'>
                    Pada Masa kepemerintahan BJ Habibie, diterapkan kebijakan pokok di bidang ekonomi, misal penanggulangan krisis ekonomi dengan mengendalikan nilai rupiah.
                    Kebijakan lainnya, yakni ketersediaan kebutuhan bahan pokok serta obat-obatan dengan harga terjangkau.
                </p>
                <p className='text-xl'>
                    Untuk melaksanakan kebijakan tersebut dilakukan langkah-langkah berikut:
                </p>
                <p className='text-xl'>
                    - Menjalin kerja sama dengan IMF (International Moneter Fund) untuk membantu proses Ekonomi
                </p>
                <p className="text-xl">
                    - Menerapkan Indepedensi Bank Indonesia agar fokus mengurus perekonomian
                </p>
                <p className="text-xl">
                    - Melikuidasi beberapa bank yang bermasalah
                </p>
                <p className="text-xl">
                    - Menaikan nilai tukar rupiah terhadap dolar Amerika hingga dibawah 10 juta
                </p>
                <p className="text-xl">
                    - Membentuk lembaga pemantau dan penyelesaian maslah utang luar negeri.
                </p>

                <p className='text-xl font-semibold'>Pemerintahan Presiden Abdurahman Wahid</p>
                <p className='text-xl mb-2'>
                    Pada masa ini, kondisi ekonomi Indonesia mulai menunjukan perbaikan dan kondisi keuangan sudah mulai stabil. Namun, keadaan kembali merosot.
                </p>
                <p className='text-xl mb-2'>
                    Pada April 2001, nilai tukar Rupiah terhadap Dolar Amerika melemah hingga mencapai Rp 12 ribu.
                    Melemahnya nilai tukar rupiah tersebut berdampak negatif terhadap perekonomian nasional, dan menghambat usaha pemulihan ekonomi.
                </p>

            </div>
            <div className="container flex justify-center items-center" data-aos="zoom-in-down">
                <div className="images lg:w-[700px] w-[300px] ">
                    <img src="./assets/img/img2.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/img3.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/img5.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/img4.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/img6.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/img.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/gusdur.jpg" alt="" className='img' />
                </div>
                <div className="images lg:w-[700px] w-[400px]">
                    <img src="./assets/img/BJHabibie.jpg" alt="" className='img' />
                </div>
            </div>
        </div>
    );
};

export default BABII;
