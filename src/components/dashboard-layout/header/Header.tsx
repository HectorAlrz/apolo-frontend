import GlobalLoader from './GlobalLoader'
import Profile from './profile/Profile'
import React from 'react'

function DashboardHeader() {
	return (
		<header className='flex-shrink-0'>
			<GlobalLoader />
			<Profile />
		</header>
	)
}

export default DashboardHeader
