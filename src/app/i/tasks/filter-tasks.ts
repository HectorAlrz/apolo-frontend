import { FILTERS } from './columns.data'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import type { ITaskResponse } from '@/types/task.types'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const filterTasks = (
	tasks: ITaskResponse[] | undefined,
	value: string
) => {
	switch (value) {
		case 'today':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSame(FILTERS.today, 'day') &&
					!task.isCompleted
			)

		case 'tomorrow':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSame(FILTERS.tomorrow, 'day') &&
					!task.isCompleted
			)

		case 'on-this-week':
			return tasks?.filter(
				task =>
					!dayjs(task.createdAt).isSame(FILTERS.today) &&
					!dayjs(task.createdAt).isSame(FILTERS.tomorrow) &&
					dayjs(task.createdAt).isSameOrBefore(FILTERS['on-this-week']) &&
					!task.isCompleted
			)

		case 'on-next-week':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isAfter(FILTERS['on-this-week']) &&
					dayjs(task.createdAt).isSameOrBefore(FILTERS['on-next-week']) &&
					!task.isCompleted
			)

		case 'late':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isAfter(FILTERS['on-next-week']) ||
					(!task.createdAt && !task.isCompleted)
			)

		default:
			return []
	}
}
