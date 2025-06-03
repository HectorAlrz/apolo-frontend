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
		<>
        <div className="relative mb-8">
          <hr className="border-2 border-[#5c4d3c]/30" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f0e6d2] px-6">
            <div className="w-4 h-4 bg-[#5c4d3c]/20 rounded-full"></div>
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="w-full">
            <div className="flex items-start justify-between gap-8 py-5 border-b-3 border-[#5c4d3c] mb-8 bg-gradient-to-r from-[#5c4d3c]/5 to-[#5c4d3c]/10 rounded-xl px-6 shadow-sm">
              <div className="font-bold text-[#5c4d3c] text- tracking-wide">Task Name</div>
              <div className="font-bold text-[#5c4d3c] text- tracking-wide">Due Date</div>
              <div className="font-bold text-[#5c4d3c] text- tracking-wide">Priority</div>
            </div>

            <div className="space-y-8">
              {COLUMNS.map((column) => (
                <ListRowParent
                  key={column.value}
                  value={column.value}
                  label={column.label}
                  items={items}
                  setItems={setItems}
                />
              ))}
            </div>
          </div>
        </DragDropContext>
		</>
	)
}

export default ListView
