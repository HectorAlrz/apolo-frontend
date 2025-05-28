'use client'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import React from 'react'

import Loader from '@/components/ui/Loader'

function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null
}

export default GlobalLoader
