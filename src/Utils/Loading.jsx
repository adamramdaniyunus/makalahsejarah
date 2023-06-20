import React from 'react'

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <img src="./assets/img/enderman.gif" alt="" className='rounded-xl' />
            <h1 className='text-4xl font-bold'>Loading...</h1>
        </div>
    )
}

export default Loading
