import cn from 'clsx'
import { X } from 'lucide-react'
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

	return (
		<div
			className={cn('relative min-w-36', { 'w-max': isColorSelected })}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				<span
					className='capitalize'
					style={isColorSelected ? { backgroundColor: 'blue' } : {}}
				>
					{getValue()}
				</span>
			</button>
			{value && (
				<button
					className='absolute top-0 right-0 opacity-30 hover:opacity-100 transition-opacity'
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className={cn(
						'absolute w-full p-2.5 left-0 slide bg-slate-500 z-10 shadow rounded-lg'
					)}
					style={{ top: 'calc(100% + 0.5rem' }}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className='block-mb-4 last:mb-0 capitalize rounded-lg'
							style={isColorSelected ? { backgroundColor: item.value } : {}}
						>
							<Badge>{item.label}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default SingleSelect
