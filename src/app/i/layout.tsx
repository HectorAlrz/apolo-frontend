import React from 'react'
import type { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashBoardLayout'

function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}

export default Layout
