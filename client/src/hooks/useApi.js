import { useState, useEffect } from 'react'
import axios from 'axios'
import { REQUEST_METHODS } from '../constants'

const useApi = (url = '', options = null, method, cb = null) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    setLoading(true)

    if (method === REQUEST_METHODS.GET) {
      if (isMounted) {
        axios
          .get(url, options)
          .then((res) => {
            if (isMounted) {
              setData(res.data.results)
              setError(null)
              setLoading(false)
            }
            return res.data.results
          })
          .then((data) => cb(data))
          .catch((err) => {
            if (isMounted) {
              if (err.response) {
                setError(err.response.data.error)
                setLoading(false)
              }
            }
          })
          .finally(() => {
            if (isMounted) {
              setLoading(false)
            }
          })
      }
    }

    return () => (isMounted = false)
  }, [url, options, method])

  return { loading, error, data }
}

export default useApi
