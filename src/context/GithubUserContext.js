import React, {useState , createContext} from 'react'
import { fetchUser } from '../utils/gitHubFunctions'

export const GithubUserContext = createContext()
  
export const GithubUserProvider = (props) => {
  const [ userData, setUserData] = useState({})

  const controller = {
    fetchUser: async user => {
      setUserData( await fetchUser(user))
    },
  }


  return (
    <GithubUserContext.Provider value={[ userData, controller ]}>
      {props.children}
    </GithubUserContext.Provider>
  )
}
