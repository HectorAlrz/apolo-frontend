'use client'

import { COLUMNS } from '../columns.data'
import { useTaskDnd } from '../hooks/useTaskDnD'
import { useTasks } from '../hooks/useTasks'
import { ListRowParent } from './ListRowParent'
import { DragDropContext } from '@hello-pangea/dnd'
import React from 'react'

import styles from './ListView.module.scss'

function ListView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div>Task Name</div>
				<div>Due date</div>
				<div>Priority</div>
				<div></div>
			</div>

			<div className={styles.parentsWrapper}>
        {COLUMNS.map.(column => (
          <ListRowParent
            key={column.value}
            value={column.value}
            label={column.label}
            items={items}
            setItems={setItems}
          />
        ))

        }
      </div>
		</DragDropContext>
	)
}

export default ListView
