import React from "react"
// import { Button } from "../../../../pageStyles"
import { CharacterObjectInterface } from "../../../../types/character/character"
import { InputsWrapper, SearchField, SelectField } from "../styled"

type FilterState = {
  nameFilter: ""
  tribeFilter: ""
}
type Props = {
  characters: CharacterObjectInterface[]
  setFilters: React.Dispatch<any>
  tribes: string[]
}
const Filters: React.FC<Props> = ({ characters, setFilters, tribes }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setFilters((prev: FilterState) => ({
      ...prev,
      nameFilter: value.toLocaleLowerCase(),
    }))
  }
  const searchByTribe = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.currentTarget
    setFilters((prev: FilterState) => ({ ...prev, tribeFilter: value }))
  }

  // const resetFilters = () => {
  //   setFilters({
  //     nameFilter: "",
  //     tribeFilter: "",
  //   })
  // }
  return (
    <InputsWrapper>
      <SearchField
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />
      <SelectField onChange={searchByTribe}>
        <option value="">All tribes</option>
        {tribes.map((tribe: string, _index: number) => (
          <option key={_index} value={tribe}>
            {tribe}
          </option>
        ))}
      </SelectField>
      {/* <Button onClick={resetFilters}>Reset</Button> */}
    </InputsWrapper>
  )
}

export default Filters
