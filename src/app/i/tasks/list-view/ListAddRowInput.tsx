import {type Dispatch, type SetStateAction} from 'react'
import {ITaskResponse} from '@/types/task.types'

import styles from './ListView.module.scss'
import { Button } from '@/components/ui/button'


interface IListAddRowInput {
  filterDate?: string
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListAddRowInput({setItems, filterDate}: IListAddRowInput) {
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
    <div className={styles.addRow}>
      <Button
        onClick={addRow}
        className='italic opacity-40 text-sm'
      >
        Add task...
      </Button>
    </div>
  )
}
