import axios from "axios";

const {
  REACT_APP_AIRTABLE_API_URL: baseURL,
  REACT_APP_AIRTABLE_API_KEY: apiKey,
} = process.env;

const AIRTABLE_API = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default AIRTABLE_API;