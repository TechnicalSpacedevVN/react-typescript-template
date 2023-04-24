import { useEffect, useState } from 'react'
import { Button } from './components/atoms/Button'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuth } from './components/AuthProvider'

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
  // const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()
  const { loginWithRedirect, logout } = useAuth()

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <Profile />
      <button onClick={() => logout()}>Log Out</button>
    </QueryClientProvider>
  )
}

const Profile: React.FC = () => {
  const { user } = useAuth()

  if (!user) return <></>

  return (
    <>
      <div>
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    </>
  )
}

export default App
