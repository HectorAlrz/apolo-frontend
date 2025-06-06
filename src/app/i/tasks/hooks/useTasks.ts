import { taskService } from '@/services/task.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { ITaskResponse } from '@/types/task.types'

export function useTasks() {
	const { data } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks()
	})

	const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
