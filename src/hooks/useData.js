import { useState, useEffect } from "react"

const useData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortCont = new AbortController()
    const fetchCountries = async () => {
      setLoading(true)
      try {
        const res = fetch(`https://covid19.mathdro.id/api/countries`, {
          signal: abortCont.signal,
        })
        const json = await (await res).json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchCountries()
    return () => abortCont.abort()
  }, [])

  return { data, loading, error }
}

export default useData
