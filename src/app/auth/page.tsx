import Auth from './Auth'
import type { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

function AuthPage() {
	return <Auth />
}

export default AuthPage
