'use client'

import LogoutButton from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
	return (
		<aside className='border-r border-r-[#805f30] h-full bg-[#e5cea2] flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout bg-[#adb26d] shadow-md'
				>
					<GanttChartSquare
						className='text-white'
						size={38}
					/>
					<span className='text-2xl font-bold relative text-white'>
						Apolo Planner
						<span className='absolute -top-1 right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							Alpha
						</span>
					</span>
				</Link>
				<div className='p-3'>
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
					<LogoutButton />
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2025 © Apolo Planner With love and coffee from{' '}
				<a
					href='https://github.com/HectorAlrz/apolo-frontend'
					target='_blank'
					rel='noreferrer'
					className='hover:text-[#61450f] transition-colors text-purple-600'
				>
					Hector Dev
				</a>
				<br /> All rights reserved.
			</footer>
		</aside>
	)
}

export default Sidebar
