'use client'

import { useProfile } from '@/app/hooks/useProfile'
import React from 'react'

import Loader from '@/components/ui/Loader'

function Profile() {
	const { data, isLoading } = useProfile()
	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>
					<div className='w-10 h-10 flex justify-center items-center text-2x bg-white/20 rounded uppercase'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}

export default Profile
