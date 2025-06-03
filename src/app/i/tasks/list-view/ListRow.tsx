import { useTaskDebounce } from '../hooks/useDebounce'
import { useDeleteTask } from '../hooks/useDeleteTask'
import cn from 'clsx'
import { Flag, GripVertical, Loader, Trash } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TransparentField } from '@/components/ui/fields/TransparentField'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'
import DatePicker from '@/components/ui/task-edit/date-picker/DatePicker'

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

interface IListRow {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

function ListRow({ item, setItems }: IListRow) {
	const [isHovered, setIsHovered] = useState(false)
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	useTaskDebounce({ watch, itemId: item.id })

	const { deleteTask, isDeletePending } = useDeleteTask()

	return (
		<div
			className={cn(
				'flex items-center justify-between gap-6 py-4 px-4 rounded-lg border-2 transition-all duration-200 group',
				watch('isCompleted')
					? 'bg-gradient-to-r from-[#5c4d3c]/5 to-[#5c4d3c]/10 border-[#5c4d3c]/20 opacity-75'
					: 'bg-gradient-to-r from-white/40 to-white/60 border-[#5c4d3c]/15 hover:border-[#5c4d3c]/40 hover:shadow-lg hover:from-white/60 hover:to-white/80',
				'shadow-sm hover:shadow-md'
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='flex items-center gap-3'>
				<button
					aria-describedby='todo-item'
					className={cn(
						'transition-opacity duration-200',
						isHovered ? 'opacity-100' : 'opacity-30'
					)}
				>
					<GripVertical className='h-4 w-4 text-[#5c4d3c]' />
				</button>
				<Controller
					control={control}
					name='isCompleted'
					render={({ field: { value, onChange } }) => (
						<Checkbox
							onChange={onChange}
							checked={value}
							className='border-2 border-[#5c4d3c]/50 data-[state=checked]:bg-[#5c4d3c] data-[state=checked]:border-[#5c4d3c]'
						/>
					)}
				/>
				<div className='flex-1'>
					<TransparentField
						{...register('name')}
						className={cn(
							'w-full bg-transparent border-none text-[#5c4d3c] placeholder-[#5c4d3c]/50 focus:outline-none text-lg',
							watch('isCompleted') && 'line-through opacity-60'
						)}
						placeholder='Enter task name...'
					/>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className='flex items-center gap-2'>
				<div className='p-1.5 bg-[#5c4d3c]/10 rounded-lg'>
					<Flag className='h-4 w-4 text-[#5c4d3c]/70' />
				</div>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['critical', 'high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className='flex items-center justify-end'>
				<Button
					variant='ghost'
					size='icon'
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
					className={cn(
						'h-8 w-8 text-[#5c4d3c]/50 hover:text-red-600 hover:bg-red-50 transition-all duration-200',
						isHovered ? 'opacity-100' : 'opacity-0'
					)}
				>
					{isDeletePending ? (
						<Loader
							size={16}
							className='animate-spin'
						/>
					) : (
						<Trash size={16} />
					)}
				</Button>
			</div>
		</div>
	)
}

export default ListRow
