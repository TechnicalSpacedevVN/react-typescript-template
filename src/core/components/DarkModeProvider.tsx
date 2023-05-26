import { createContext, useContext, useEffect, useState } from 'react'

export interface ModeContextProps {
	mode: string
	toggleMode: (darkMode?: boolean) => void
}

const Context = createContext({} as ModeContextProps)

export const DarkModeProvider: React.FC<{ children: any }> = ({ children }) => {
	const [mode, setMode] = useState(localStorage.theme)
	useEffect(() => {
		if (mode === 'dark') {
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleMode: ModeContextProps['toggleMode'] = darkMode => {
		if (typeof darkMode !== 'undefined') {
			if (darkMode) {
				document.documentElement.classList.remove('dark')
				localStorage.theme = 'light'
			} else {
				document.documentElement.classList.add('dark')
				localStorage.theme = 'dark'
			}
		} else {
			if (
				mode === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.remove('dark')
				localStorage.theme = 'light'
			} else {
				document.documentElement.classList.add('dark')
				localStorage.theme = 'dark'
			}
		}

		setMode(localStorage.theme)
	}
	return <Context.Provider value={{ mode, toggleMode }}>{children}</Context.Provider>
}

export const useMode = () => useContext(Context)
