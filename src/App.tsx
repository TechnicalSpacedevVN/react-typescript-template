import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuth } from './components/AuthProvider'
import { Button } from 'antd'

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

const xhr = new XMLHttpRequest()
// xhr.withCredentials = true
xhr.open('GET', 'https://login.com', true)
xhr.send()

const iframe = document.createElement('iframe')
iframe.src = xhr.responseURL
document.getElementById('hidden')?.appendChild(iframe)

function App() {
	const [count, setCount] = useState(0)
	// const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0()
	const { loginWithRedirect, logout, user } = useAuth()

	return (
		<QueryClientProvider client={queryClient}>
			<div className='flex flex-col items-center gap-8'>
				{user ? (
					<>
						<Profile />
						<Button size='large' type='primary' onClick={logout}>
							Log Out
						</Button>
					</>
				) : (
					<Button size='large' type='primary' onClick={loginWithRedirect}>
						Log In
					</Button>
				)}
			</div>
		</QueryClientProvider>
	)
}

const Profile: React.FC = () => {
	const { user } = useAuth()

	if (!user) return <></>

	return (
		<>
			<div className='flex justify-center flex-col items-center'>
				<h2 className='text-2xl'>{user.name}</h2>
				<img className='rounded-full w-[100px] h-[100px]' src='https://picsum.photos/200' />
			</div>
		</>
	)
}

export default App
