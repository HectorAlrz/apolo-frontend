'use client'

import { useProfile } from '../hooks/useProfile'
import React from 'react'

import Loader from '@/components/ui/Loader'

function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(statistic => {
					return (
						<div
							className='rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500 bg-[#e5cea2]'
							key={statistic.label}
						>
							<div className='text-xl '>{statistic.label}</div>
							<div className='text-3xl font-semibold'>{statistic.value}</div>
						</div>
					)
				})
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}

export default Statistics
