'use client'

import { formatCaption } from './DatePickerCaption'
import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { Calendar, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { Button } from '@/components/ui/button'

import { useOutside } from '@/hooks/useOutside'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}

function DatePicker({ onChange, value, position = 'right' }: IDatePicker) {
	const [selected, setSelected] = useState<Date | undefined>()
	const { isShow, setIsShow, ref } = useOutside(false)

	useEffect(() => {
		if (value) {
			setSelected(new Date(value))
		} else {
			setSelected(undefined)
		}
	}, [value])

	const handleDaySelect: SelectSingleEventHandler = date => {
		const ISOdate = date?.toISOString()

		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}

	return (
		<div
			className='relative'
			ref={ref}
		>
			<Button
				variant='ghost'
				onClick={() => setIsShow(!isShow)}
				className='flex items-center gap-2 text-[#5c4d3c]/80 hover:text-[#5c4d3c] hover:bg-[#5c4d3c]/5 transition-colors px-3 py-1.5 h-auto'
			>
				<div className='p-1.5 bg-[#5c4d3c]/10 rounded-lg'>
					<Calendar className='h-4 w-4 text-[#5c4d3c]/70' />
				</div>
				<span className='text-sm font-medium'>
					{value ? dayjs(value).format('LL') : 'Set date'}
				</span>
			</Button>
			{value && (
				<button
					onClick={e => {
						e.stopPropagation()
						onChange('')
					}}
					className='absolute top-[1] -translate-y-1/2 right-[1] opacity-50 hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-[#5c4d3c]/10'
				>
					<X
						size={12}
						className='absolute'
					/>
				</button>
			)}

			{isShow && (
				<div
					className={cn(
						'absolute p-3 z-50 shadow-lg rounded-lg border-2 border-[#5c4d3c]/20',
						position === 'left' ? 'left-0' : 'right-0',
						'bg-[#f0e6d2]'
					)}
					style={{ top: 'calc(100% + 0.5rem)' }}
				>
					<style
						jsx
						global
					>{`
						.rdp {
							--rdp-cell-size: 40px;
							--rdp-accent-color: #5c4d3c;
							--rdp-background-color: rgba(92, 77, 60, 0.1);
							margin: 0;
							font-family: inherit;
						}

						.rdp-months {
							display: flex;
						}

						.rdp-month {
							margin: 0;
						}

						.rdp-table {
							width: 100%;
							border-collapse: collapse;
						}

						.rdp-caption {
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 0 0 1rem 0;
							font-family: inherit;
							font-size: 16px;
							font-weight: 600;
							color: #5c4d3c;
						}

						.rdp-caption_label {
							font-size: 16px;
							font-weight: 600;
							color: #5c4d3c;
						}

						.rdp-nav {
							display: flex;
							gap: 0.5rem;
						}

						.rdp-nav_button {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 32px;
							height: 32px;
							border: 1px solid rgba(92, 77, 60, 0.3);
							border-radius: 6px;
							background: transparent;
							color: #5c4d3c;
							cursor: pointer;
							transition: all 0.2s;
						}

						.rdp-nav_button:hover {
							background: rgba(92, 77, 60, 0.1);
							border-color: rgba(92, 77, 60, 0.5);
						}

						.rdp-nav_button:disabled {
							opacity: 0.5;
							cursor: not-allowed;
						}

						.rdp-head_row {
							border-bottom: 1px solid rgba(92, 77, 60, 0.2);
						}

						.rdp-head_cell {
							font-weight: 600;
							font-size: 14px;
							color: #5c4d3c;
							padding: 0.5rem;
							text-align: center;
						}

						.rdp-tbody {
							border: none;
						}

						.rdp-row {
							border: none;
						}

						.rdp-cell {
							padding: 2px;
							text-align: center;
						}

						.rdp-button {
							display: flex;
							align-items: center;
							justify-content: center;
							width: var(--rdp-cell-size);
							height: var(--rdp-cell-size);
							border: none;
							border-radius: 6px;
							background: transparent;
							color: #5c4d3c;
							cursor: pointer;
							font-size: 14px;
							transition: all 0.2s;
						}

						.rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
							background-color: rgba(92, 77, 60, 0.1);
						}

						.rdp-button:disabled {
							opacity: 0.5;
							cursor: not-allowed;
						}

						.rdp-day_today {
							font-weight: 600;
							color: #5c4d3c;
						}

						.rdp-day_selected,
						.rdp-day_selected:focus-visible,
						.rdp-day_selected:hover {
							background-color: #5c4d3c !important;
							color: #f0e6d2 !important;
							font-weight: 600;
						}

						.rdp-day_outside {
							opacity: 0.5;
						}
					`}</style>

					<DayPicker
						fromYear={2025}
						toYear={2054}
						initialFocus={isShow}
						mode='single'
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
						className='bg-[#f0e6d2]'
					/>

					<div className='flex justify-between mt-3 border-t border-[#5c4d3c]/20 pt-3'>
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setIsShow(false)}
							className='text-[#5c4d3c]/70 hover:text-[#5c4d3c] hover:bg-[#5c4d3c]/10'
						>
							Cancel
						</Button>

						<Button
							size='sm'
							onClick={() => {
								onChange(new Date().toISOString())
								setIsShow(false)
							}}
							className='bg-[#5c4d3c] text-[#f0e6d2] hover:bg-[#5c4d3c]/90'
						>
							Today
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default DatePicker
