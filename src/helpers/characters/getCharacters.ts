import axios from "axios"

export default async function getCharacters() {
  try {
    const url = `http://localhost:8000/characters`
    const result = await axios.get(url)
    return result.data
  } catch (error) {
    throw error
  }
}
