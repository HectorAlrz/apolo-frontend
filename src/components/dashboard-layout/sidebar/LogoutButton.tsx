'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function LogoutButton() {
	const router = useRouter()
	const {} = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<div className='py-1.5 mt-2 ml-6'>
			<button className='opacity-20 hover:opacity-100 transition-opacity duration-300'>
        <LogOut size={20} />
      </button>
		</div>
	)
}

export default LogoutButton
