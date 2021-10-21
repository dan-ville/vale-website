import Airtable from "airtable";

const {
  REACT_APP_AIRTABLE_API_KEY: apiKey,
  REACT_APP_AIRTABLE_BASE_ID: baseId,
} = process.env;

export default function useAirtable() {
  const base = new Airtable({ apiKey }).base(baseId);
  return base;
}
