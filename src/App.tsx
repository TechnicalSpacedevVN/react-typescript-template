import '@assets/css/tailwind.css'
import { routers } from '@routres'
import 'configs/moment'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes } from 'react-router-dom'

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
