import { FILTERS } from '../columns.data'
import { filterTasks } from '../filter-tasks'
import { ListAddRowInput } from './ListAddRowInput'
import ListRow from './ListRow'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import {
	Archive,
	Calendar,
	CheckCircle,
	ChevronDown,
	ChevronRight,
	Clock,
	Star,
	Zap
} from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import type { ITaskResponse } from '@/types/task.types'

interface IListRowParent {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

const sectionIcons = {
	today: Calendar,
	tomorrow: Clock,
	thisWeek: Star,
	nextWeek: Zap,
	later: Archive,
	completed: CheckCircle
}

export function ListRowParent({
	value,
	items,
	label,
	setItems
}: IListRowParent) {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const filteredTasks = filterTasks(items, value)
	const taskCount = filteredTasks?.length || 0
	const IconComponent =
		sectionIcons[value as keyof typeof sectionIcons] || Calendar

	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className='mb-10'
				>
					<div className='mb-6'>
						<button
							onClick={() => setIsCollapsed(!isCollapsed)}
							className='flex items-center gap-4 w-full group hover:bg-white/30 p-4 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#5c4d3c]/20'
						>
							<div className='flex items-center gap-3'>
								{isCollapsed ? (
									<ChevronRight className='h-6 w-6 text-[#5c4d3c]/70 transition-transform duration-200' />
								) : (
									<ChevronDown className='h-6 w-6 text-[#5c4d3c]/70 transition-transform duration-200' />
								)}
								<div className='p-2 bg-[#5c4d3c]/10 rounded-lg'>
									<IconComponent className='h-5 w-5 text-[#5c4d3c]' />
								</div>
							</div>

							<h2 className='font-bold text-[#5c4d3c] text-2xl tracking-wide'>
								{label}
							</h2>

							<div className='flex items-center gap-2 ml-auto'>
								<span className='bg-gradient-to-r from-[#5c4d3c]/10 to-[#5c4d3c]/20 text-[#5c4d3c] px-4 py-2 rounded-full text-sm font-bold border border-[#5c4d3c]/20'>
									{taskCount} {taskCount === 1 ? 'task' : 'tasks'}
								</span>
							</div>
						</button>

						<div className='mt-3 ml-4'>
							<hr className='border-[#5c4d3c]/20 border-dashed' />
						</div>
					</div>

					{!isCollapsed && (
						<div className='space-y-3 ml-4'>
							{filteredTasks?.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id ? String(item.id) : `draggable-${index}`}
									index={index}
								>
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className='relative transition-all duration-300'
										>
											<ListRow
												key={item.id}
												item={item}
												setItems={setItems}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}

					{!isCollapsed &&
						value !== 'completed' &&
						!items?.some(item => !item.id) && (
							<div className='ml-4'>
								<ListAddRowInput
									setItems={setItems}
									filterDate={
										FILTERS[value] ? FILTERS[value].format() : undefined
									}
								/>
							</div>
						)}
				</div>
			)}
		</Droppable>
	)
}
