'use client';

import { DASHBOARD_PAGES } from '../config/pages-url.config';
import { authService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';



import Heading from '@/components/ui/Heading';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/fields/Fields';



import { IAuthForm } from '@/types/auth.types';





function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

	const { push } = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
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
		<div className='flex min-h-screen items-center justify-center bg-lightwood p-4 sm:p-6 md:p-8'>
			<form
				className='w-full max-w-md rounded-xl bg-[#e5cea2] p-6 shadow-xl border border-[#c0a77e] sm:p-8'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Auth' />
				<Field
					id='email'
					label='Email'
					placeholder='Enter your email'
					type='email'
					extra='mb-4'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<Field
					id='password'
					label='Password'
					placeholder='Enter password'
					type='password'
					extra='mb-4'
					{...register('password', {
						required: 'Password is required!'
					})}
				/>
				<div className='mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center'>
					<Button
						className='w-full sm:w-auto'
						onClick={() => setIsLoginForm(true)}
					>
						Login
					</Button>
					<Button
						className='w-full sm:w-auto'
						onClick={() => setIsLoginForm(false)}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}

export default Auth