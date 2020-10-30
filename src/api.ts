const CAT_API_URL = 'https://cat-fact.herokuapp.com/facts'

export const fetchCatData = async (): Promise<any> => {
  const url: URL = new URL(CAT_API_URL)

  const response = await fetch(url.href)

  if (response.status !== 200) {
    return new Error('Failed to fetch cat data')
  }
  return response.json()
}

export const fetchAvatarData = async (username: string): Promise<any> => {
  const response = await fetch(
    `https://eu.ui-avatars.com/api/?background=random&size=400&name=${username}`
  )
  if (response.status !== 200) {
    return new Error('Failed to fetch avatar data')
  }
  return response.blob()
}
