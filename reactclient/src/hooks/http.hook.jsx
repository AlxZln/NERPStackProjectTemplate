import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch("http://localhost:5000" + url, { method, body, headers })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const requestGetFile = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {

      fetch("http://localhost:5000" + url, { method, body, headers }).then((res) => {
        return res.blob();
      })
        .then((blob) => {
          const href = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', 'Result.xlsx'); //or any other extension
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })




      return response
    } catch (e) {

      setError(e.message)
      throw e
    }
  }, [])

  const requestFile = useCallback(async (url, method = 'POST', body = null, headers = {}) => {
    setLoading(true)
    console.log("REQUEST")
    console.log(body.file)
    try {
      const formData = new FormData()

      formData.append('file', body.file);
      formData.append('text', "Это тексты");
      for (var [key, value] of formData.entries()) {
        console.log(key, value);
      }
      headers['Content-Type'] = 'multipart/form-data'
      const response = await fetch("http://localhost:5000/api/excel/upload", {
        method: 'POST',
        body: formData
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || '#error# ЧТо то пошло не так')
      }

      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, requestFile, requestGetFile, error, clearError }
}

