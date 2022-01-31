import axios from "axios"

const { REACT_APP_BASE_URL: BASE_URL } = process.env

export default async function getCharacter(id: string) {
  try {
    const url = `${BASE_URL}/characters/${id}`
    const result = await axios.get(url)
    return result.data
  } catch (error) {
    throw error
  }
}
