import { type Dispatch, type SetStateAction } from 'react'

import { Button } from '@/components/ui/button'

import { ITaskResponse } from '@/types/task.types'

import styles from './ListView.module.scss'
import { Plus } from 'lucide-react'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

	return (
		<div className='mt-4'>
			<Button
				onClick={addRow}
				variant='ghost'
				className='w-full justify-start text-[#5c4d3c]/60 hover:text-[#5c4d3c] hover:bg-[#5c4d3c]/5 border-2 border-dashed border-[#5c4d3c]/20 hover:border-[#5c4d3c]/40 transition-all duration-200 py-6'
			>
				<Plus className='h-4 w-4 mr-2' />
				Add task...
			</Button>
		</div>
	)
}
