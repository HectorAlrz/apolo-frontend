'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					staleTime: 1000 * 60 * 5
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<SidebarProvider defaultOpen={true}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</SidebarProvider>
		</QueryClientProvider>
	)
}
