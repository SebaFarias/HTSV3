import React, {useState , createContext} from 'react'
import { fetchUser, getRepos } from '../utils/gitHubFunctions'

export const GithubUserContext = createContext()
  
export const GithubUserProvider = (props) => {
  const [ userData, setUserData] = useState({})

  const controller = {
    fetchUser: async user => {
      const data = await fetchUser(user)
      const repos = await getRepos(user)
      setUserData(
        {
          avatar_url : data.avatar_url,
          login: data.login,
          repos: repos,
        }
      )
    },
  }


  return (
    <GithubUserContext.Provider value={[ userData, controller ]}>
      {props.children}
    </GithubUserContext.Provider>
  )
}
