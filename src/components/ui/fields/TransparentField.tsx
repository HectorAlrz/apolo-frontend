import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			ref={ref}
			className={cn(
				'bg-transparent border-none outline-none text-[#5c4d3c] placeholder-[#5c4d3c]/50',
				className
			)}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
