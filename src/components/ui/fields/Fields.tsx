import { type ChangeEventHandler, forwardRef } from 'react'
import { Input } from '../input'

interface InputFieldProps {
	id: string
	label: string
	placeholder?: string
	extra?: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			id,
			label,
			placeholder,
			extra,
			variant,
			state,
			disabled,
			type,
			onChange,
			isNumber,
			...rest
		},
		ref
	) => {
	return (
		<div className={`${extra}`}>
			<label htmlFor={id} className='text-sm text-[#805f30] dark:text-white ml--1.5'>{label}</label>
			<Input
				ref={ref}
				disabled={disabled}
				type={type}
				id={id}
				placeholder={placeholder}
				{...rest}
				className={`mt-2 flex w-full items-center justify-center rounded-lg border border-[#c0a77e] bg-white/0 p-3 text-base outline-none placeholder:text-[#c0a77e] placeholder:font-normal duration-500 transition-colors focus:border-[#9d865d]
					${disabled === true ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
						: state === 'error' ? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
						: state === 'success' ? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400' : ''}`}
				onKeyDown={event => {
					if ( isNumber && !/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab' && event.key !== 'Enter' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {event.preventDefault()}}}
			/>
		</div>
	)
})
