import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import { Auth0Provider } from '@auth0/auth0-react'
import { AuthProvider } from '@components/AuthProvider'
import '@assets/tailwind.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<BrowserRouter>
		<Auth0Provider
			domain='dev-te6zolyvwhgh31vx.us.auth0.com'
			clientId='hHsE8rgYG5czcJsV6bBnbPjk4U5q8jIc'
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Auth0Provider>
	</BrowserRouter>,
	// </React.StrictMode>,
)
