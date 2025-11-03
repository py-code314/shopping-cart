import { useState, useEffect } from 'react'

export const useData = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const response = await fetch(url, controller.signal)
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        let data = await response.json()
        setData(data)
        setError(false)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Aborted')
          return
        }

        setError(err.message)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()

  }, [url])

  return {data, isLoading, error}
}
