import cn from 'clsx'
import { ChevronDown, X } from 'lucide-react'
import React from 'react'

import { Badge } from '@/components/ui/badge'

import { useOutside } from '@/hooks/useOutside'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelected?: boolean
}

function SingleSelect({
	data,
	onChange,
	value,
	isColorSelected
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value

	const priorityStyles = {
		critical: 'bg-purple-100 text-red-800 border-purple-200 hover:bg-purple-200',
		high: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
		medium:
			'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200',
		low: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200'
	}

	return (
		<div
			className={cn('relative min-w-32', { 'w-max': isColorSelected })}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
				className='w-full'
			>
				<Badge
					className={cn(
						'capitalize relative flex items-center gap-2 px-3 py-1.5 border-2 transition-all duration-200',
						value
							? priorityStyles[value as keyof typeof priorityStyles]
							: 'bg-[#f0e6d2] text-[#5c4d3c] border-[#5c4d3c]/30 hover:border-[#5c4d3c]/50'
					)}
					style={isColorSelected ? { backgroundColor: value } : {}}
				>
					{getValue() || 'Priority...'}
					<ChevronDown className='h-3 w-3' />
				</Badge>
			</button>
			{value && (
				<button
					className='absolute top-1 right-1 opacity-50 hover:opacity-100 transition-opacity z-10'
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={12} />
				</button>
			)}
			{isShow && (
				<div
					className='absolute w-full p-2 left-0 bg-[#f0e6d2] border-2 border-[#5c4d3c]/30 z-20 shadow-lg rounded-lg mt-1'
					style={{ top: 'calc(100% + 0.25rem)' }}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className='block w-full mb-2 last:mb-0 text-left'
							style={isColorSelected ? { backgroundColor: item.value } : {}}
						>
							<Badge
								className={cn(
									'w-full justify-start capitalize border-2 transition-all duration-200',
									priorityStyles[item.value as keyof typeof priorityStyles]
								)}
							>
								{item.label}
							</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default SingleSelect
