import { useState, useEffect } from "react"

const useFetch = country => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchStates = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://covid19.mathdro.id/api/countries/${country}`
        )
        const json = await (await res).json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchStates()
  }, [country])
  return { data, loading, error }
}

export default useFetch
