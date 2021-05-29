export const fetchUser = async user => {
  const response = await fetch(`https://api.github.com/users/${user}`)
  .catch( err => {
    console.error(err)
  })
  return response.json()
}

