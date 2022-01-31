import axios from "axios"

const {REACT_APP_BASE_URL: BASE_URL} = process.env

export default async function getCharacters() {
  try {
    const url = `${BASE_URL}/characters`
    const result = await axios.get(url)
    return result.data
  } catch (error) {
    throw error
  }
}
