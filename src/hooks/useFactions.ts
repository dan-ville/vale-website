import { useEffect, useState } from "react"
import getFactions from "../helpers/factions/getFactions"

const useFactions = () => {
  const [factions, setFactions] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFactions().then((res) => {
      setFactions(res)
      setIsLoading(false)
    })
  }, [])

  return [factions, isLoading]
}

export default useFactions
