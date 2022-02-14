import useFactions from "../../hooks/useFactions"
import Loading from "../Loading/Loading"

const Factions = () => {
  const [factions, isLoading] = useFactions()

  if (isLoading) return <Loading />
  console.log(factions)

  return (
    <div>
      {factions.map((each: any) => (
        <>
          <h2>{each.fields.Name}</h2>
          <p>{each.fields.Classifications?.[0]}</p>
        </>
      ))}
    </div>
  )
}

export default Factions
