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
				<Badge
					className='capitalize'
					style={isColorSelected ? { backgroundColor: value } : {}}
				>
					{getValue()}
				</Badge>
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
		</div>
	)
}

export default SingleSelect
