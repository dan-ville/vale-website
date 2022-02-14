require("dotenv").config()
const axios = require("axios")
const express = require("express")
const cors = require("cors")
const app = express()
const Airtable = require("airtable")
const PORT = 8000

const {
  REACT_APP_AIRTABLE_API_URL: baseURL,
  REACT_APP_AIRTABLE_API_KEY: apiKey,
  REACT_APP_AIRTABLE_BASE_ID: baseId,
} = process.env

const AXIOS = axios.create({
  baseURL: `${baseURL}/${baseId}`,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})

const base = new Airtable({ apiKey }).base(baseId)

app.use(cors())

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})

app.get("/characters", (req, res) => {
  const url = `/Characters?view=Main`
  return AXIOS.get(url)
    .then((response) => {
      res.json(response.data.records)
    })
    .catch((error) => console.error(error))
})

app.get("/characters/:id", (req, res) => {
  const { id } = req.params
  base("Characters").find(id, function (err, record) {
    if (err) {
      console.error(err)
      return
    }
    res.json(record)
  })
})

app.get("/factions", (req, res) => {
  const url = `/Factions?view=Main`
  return AXIOS.get(url)
    .then((response) => {
      res.json(response.data.records)
    })
    .catch((error) => console.error(error))
})
