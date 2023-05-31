import { routers } from '@routres'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes } from 'react-router-dom'
import '@assets/css/tailwind.css'
import 'configs/moment'
import { Suspense, useState } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			keepPreviousData: true,
			retry: 3,
			refetchOnWindowFocus: false,
			retryDelay: 3000,
		},
	},
})

function App() {
	const element = useRoutes(routers)

	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<div>Loading....</div>}>{element}</Suspense>
		</QueryClientProvider>
	)
}

export default App
