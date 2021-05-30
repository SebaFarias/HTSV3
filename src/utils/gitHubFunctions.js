export const fetchUser = async user => {
  const response = await fetch(`https://api.github.com/users/${user}`)
  .catch( err => {
    console.error(err)
  })
  return response.json()
}

export const getRepos = async user => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  .catch( err => {
    console.error(err)
  })
  return response.json()
}

