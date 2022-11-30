import { Routes, Route, Navigate } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard"
import { HomePage } from "../pages/Home"

export const RoutesPage = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="*" element={<Navigate to="/home"/> }/>
        </Routes>
    )
}