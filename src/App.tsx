import { useEffect, useState } from 'react'
import { Button } from './components/atoms/Button'
import { QueryClient, QueryClientProvider } from 'react-query'

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
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <Button></Button>
    </QueryClientProvider>
  )
}

export default App
