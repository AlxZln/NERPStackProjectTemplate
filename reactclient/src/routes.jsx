import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {ExcelPage} from './pages/ExcelPage'
import { TablesPage } from './pages/TablesPage'
import { OtherPage } from './pages/OtherPage'
export const useRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
    </Routes>
    )
}
