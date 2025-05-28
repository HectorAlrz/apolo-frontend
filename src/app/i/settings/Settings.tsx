'use client'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/fields/Fields'

import { TypeUserForm } from '@/types/auth.types'

function Settings() {
	const { register, handleSubmit, reset, setValue } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)
	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: data.password || undefined
		})
	}

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							placeholder='apolo@email.com'
							id='email'
							label='Email'
							type='email'
							extra='mb-4'
							{...register('email', { required: 'Email is required' })}
						/>
						<Field
							placeholder='Silver Fox'
							id='name'
							label='Name'
							extra='mb-4'
							{...register('name')}
						/>
						<Field
							placeholder='Enter password'
							id='password'
							label='Password'
							type='password'
							extra='mb-10'
							{...register('password')}
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work interval (min.):'
							placeholder='Enter work interval in minutes'
							isNumber
							extra='mb-4'
							{...register('workInterval', { valueAsNumber: true })}
						/>
						<Field
							id='breakInterval'
							label='Break interval (min.):'
							placeholder='Enter break interval in minutes'
							isNumber
							extra='mb-4'
							{...register('breakInterval', { valueAsNumber: true })}
						/>
						<Field
							id='intervalsCount'
							label='Intervals count (max 10):'
							placeholder='Enter intervals count (max 10)'
							isNumber
							extra='mb-4'
							{...register('intervalsCount', { valueAsNumber: true })}
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
					className='transition-colors duration-300 hover:bg-[#adb26d] hover:text-white'
				>
					Save
				</Button>
			</form>
		</div>
	)
}

export default Settings
