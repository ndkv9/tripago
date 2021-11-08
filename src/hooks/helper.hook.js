import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = baseUrl => {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState(baseUrl)
  const [isPending, setIsPending] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    setIsPending(true)
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal })
        setIsPending(false)
        setData(res.data)
        setError(null)
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch the data')
        console.log('sai roi:', err.message)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, setUrl, isPending, error }
}
