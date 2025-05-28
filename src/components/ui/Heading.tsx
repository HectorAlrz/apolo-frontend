import React from 'react'

interface IHeading {
	title: string
}

function Heading({ title }: IHeading) {
	return (
    <div className="mb-4 text-center text-2xl font-bold text-gray-700 sm:text-3xl md:mb-8">
      <h1 className='text-3xl font-medium text-[#61450f]'>{title}</h1>
      <div className='my-3 w-full border-b-2 border-[#c0a77e]' />
    </div>
  )
}

export default Heading
