import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export interface User {
  name: string
  avatar: string
}

class Cookie {
  static set(name: string, value: string, days?: number) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie =
      name +
      '=' +
      value +
      expires +
      '; path=/' +
      '; domain=' +
      'login.com' +
      '; secure=false' +
      // 'localhost:3002'
      '; SameSite=None'
  }

  static get(name: string) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1)
      }
    }
    return null
  }

  static delete(name: string) {
    document.cookie =
      name +
      '=; Max-Age=-99999999; path=/' +
      ';domain=' +
      // + window.location.host.replace(/^[\w-]+\.([\w-]+\.\w+)$/, '$1'),
      'localhost'
  }
}

export interface AuthContext {
  user?: User
  loginWithRedirect: () => void
  logout: () => void
}

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{ children?: any }> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(() => {
    if (Cookie.get('token')) {
      return {
        avatar: 'a',
        name: 'Vương',
      }
    }
  })

  useEffect(() => {
    axios.get('http://localhost:3002/auth', { withCredentials: true }).then((res) => {
      console.log(res)
    })
  }, [])

  const loginWithRedirect = async () => {
    let res = await axios.post('http://localhost:3002/auth', { withCredentials: true })
    console.log(res)
    Cookie.set('token', 'adsfasdf')
    setUser({
      avatar: 'a',
      name: 'Vương',
    })
  }
  const logout = () => {}

  return <Context.Provider value={{ loginWithRedirect, logout, user }}>{children}</Context.Provider>
}

export const useAuth = () => useContext(Context)
