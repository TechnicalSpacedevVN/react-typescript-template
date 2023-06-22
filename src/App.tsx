import '@assets/css/tailwind.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'configs/moment'
import dayjs from 'dayjs'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routers } from 'routres'

const a = dayjs('2023-01-02')
console.log(a.fromNow())

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

const App = () => {
	const element = useRoutes(routers)

	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<div>Loading....</div>}>{element}</Suspense>
		</QueryClientProvider>
	)
}

export default App
