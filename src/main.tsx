import { DarkModeProvider } from '@core/components/DarkModeProvider'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#00b96b',
			},
		}}
		form={{
			validateMessages: {
				required: '"${label}" là bắt buộc',
				types: {
					email: '${label}',
				},
			},
		}}
	>
		<BrowserRouter>
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</BrowserRouter>
	</ConfigProvider>,
	// </React.StrictMode>,
)
