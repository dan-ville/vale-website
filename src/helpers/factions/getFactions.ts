import axios from "axios"

const { REACT_APP_BASE_URL: BASE_URL } = process.env

export default async function getFactions() {
  try {
    const url = `${BASE_URL}/factions`
    const result = await axios.get(url)
    return result.data
  } catch (error) {
    throw error
  }
}
