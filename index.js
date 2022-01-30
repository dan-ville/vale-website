require("dotenv").config()
const axios = require("axios")
const express = require("express")
const cors = require("cors")
const PORT = 8000
const app = express()

const {
  REACT_APP_AIRTABLE_API_URL: baseURL,
  REACT_APP_AIRTABLE_API_KEY: apiKey,
  REACT_APP_AIRTABLE_BASE_ID: baseId,
} = process.env

const AXIOS = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})

app.use(cors())

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})

app.get("/characters", (req, res) => {
  const url = `${baseId}/Characters?view=Main%20View`
  return AXIOS.get(url)
    .then((response) => {
      res.json(response.data.records)
    })
    .catch((error) => console.error(error))
})
