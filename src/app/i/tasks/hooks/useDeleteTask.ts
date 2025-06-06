import { taskService } from '@/services/task.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

export function useDeleteTask() {
	const queryClient = useQueryClient()

	const {
		mutate: deleteTask,
		isPending
	} = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: string) => taskService.deleteTask(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { deleteTask, isDeletePending: isPending }
}
