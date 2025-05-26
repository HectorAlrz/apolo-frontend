'use client'

import { DASHBOARD_PAGES } from '../config/pages-url.config'
import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/fields/Fields'
import { Input } from '@/components/ui/input'

import { IAuthForm } from '@/types/auth.types'

function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)
	const { push } = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoadingForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen bg-lightwood'>
			<form
				className='w-1/4 m-auto shadow rounded-xl p-layout bg-[#e5cea2] border border-[#c0a77e] '
				onSubmit={handleSubmit(onSubmit)}
			>
				Heading fields
				<div className='flex items-center gap-5 justify-center text-sm'>
					<Button>Button</Button>
					<Input ></Input>
				</div>
				<Field
					id={'1'}
					label='label'
					placeholder='placeholder'
					type='text'
				/>
				<div>
					<Checkbox />
				</div>
			</form>
		</div>
	)
}

export default Auth
