import AIRTABLE_API from "../../components/axios/instance";

const { REACT_APP_AIRTABLE_BASE_ID: baseId } = process.env;

export default async function getCharacters() {
  const url = `/${baseId}/Characters?view=Main%20View`;
  const result = await AIRTABLE_API.get(url);

  if (result.status !== 200) {
    throw new Error("Error", { result });
  }

  return result.data.records.map((record) => record.fields);
}
