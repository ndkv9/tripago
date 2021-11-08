import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = baseUrl => {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState(baseUrl)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url)
      setData(res.data)
    }
    fetchData()
  }, [url])

  return [data, setUrl]
}
