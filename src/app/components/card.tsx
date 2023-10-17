import React from 'react'

type Props = {
    title: number;
    time: number;
}

export default function CardComponent({title,time}: Props) {
  return (
    <div className='border p-6 rounded-lg w-[300px]'>
        <h2 className='text-3xl font-semibold '>Card#{title}</h2>
        <p>fetched data for {time.toFixed(2)}ms</p>
    </div>
  )
}