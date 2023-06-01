import { FC, createContext, useContext } from 'react'

export interface ProviderProps {}

const Context = createContext({} as ProviderProps)

export const Provider: FC<{ children: any }> = ({ children }) => {
	return <Context.Provider value={{}}>{children}</Context.Provider>
}

export const useProvider = () => useContext(Context)
