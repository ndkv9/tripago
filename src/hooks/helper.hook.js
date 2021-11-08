import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = baseUrl => {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState(baseUrl)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const fetchData = async () => {
      const res = await axios.get(url)
      setIsPending(false)
      setData(res.data)
    }
    fetchData()
  }, [url])

  return { data, setUrl, isPending }
}
