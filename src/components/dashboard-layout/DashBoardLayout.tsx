import DashboardHeader from './header/Header'
import Sidebar from './sidebar/Sidebar'
import React from 'react'
import type { PropsWithChildren } from 'react'

function DashboardLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr] shrink-0'>
			<Sidebar />
			<main className='flex-grow p-big layout overflow-y-auto overflow-x-hidden'>
				<DashboardHeader />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
