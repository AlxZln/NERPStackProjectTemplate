import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {ExcelPage} from './pages/ExcelPage'

export const useRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/excel" element={<ExcelPage />} />
    </Routes>
    )
}
