import HomePage from "@/pages/home-page"
import LoginPage from "@/pages/login-page"
import NotFoundGuestPage from "@/pages/not-found-page"
import RegisterPage from "@/pages/register-page"
import { Route, Routes } from "react-router-dom"

export default function AppRoute() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundGuestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
